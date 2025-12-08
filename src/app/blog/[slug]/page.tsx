import type { Metadata } from "next";

import { articles } from "@/data/articles";
import { authors } from "@/data/authors";

import ArticleContent from "./ArticleContent";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    const author = authors[article.authorId];

    return {
        title: `${article.title} | Blog`,
        description: article.description,
        authors: author ? [{ name: author.name, url: author.social.website }] : undefined,
        keywords: article.seo?.keywords,
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            publishedTime: article.publishedDate,
            modifiedTime: article.updatedDate,
            authors: author ? [author.name] : undefined,
            tags: article.tags,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ArticleContent params={resolvedParams} />;
}
