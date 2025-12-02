import { articles } from "@/data/articles";
import { authors } from "@/data/authors";
import ArticleContent from "./ArticleContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const article = articles.find((a) => a.slug === params.slug);

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

export default function ArticlePage({ params }: { params: { slug: string } }) {
    return <ArticleContent params={params} />;
}
