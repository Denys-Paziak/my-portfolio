"use client";

import { ArrowLeft, Clock, Calendar, Tag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Text } from "../../components/ui/Text";
import { Heading } from "../../components/ui/Heading";
import { Badge } from "../../components/ui/Badge";
import { Footer } from "../../components/Footer";
import { Separator } from "../../components/ui/Separator";
import { articles } from "@/data/articles";
import { authors } from "@/data/authors";

export default function ArticleContent({ params }: { params: { slug: string } }) {
    const article = articles.find((a) => a.slug === params.slug);

    if (!article) {
        return (
            <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <Heading level={1} className="text-4xl mb-4">
                        Article Not Found
                    </Heading>
                    <Link href="/blog">
                        <Button variant="primary">Back to Blog</Button>
                    </Link>
                </div>
            </main>
        );
    }

    const author = authors[article.authorId];

    // Structured data for SEO (JSON-LD)
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: article.seo?.ogImage || "https://denispazak.com/og-image.jpg",
        datePublished: article.publishedDate,
        dateModified: article.updatedDate || article.publishedDate,
        author: {
            "@type": "Person",
            name: author.name,
            url: author.social.website,
            jobTitle: author.role,
            email: author.email,
        },
        publisher: {
            "@type": "Person",
            name: author.name,
            url: author.social.website,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://denispazak.com/blog/${article.slug}`,
        },
        keywords: article.seo?.keywords?.join(", "),
        articleSection: article.category,
    };

    // Mock content - in real app, fetch from CMS or markdown
    const content = `
        <p>In the rapidly evolving landscape of digital commerce, the traditional monolithic architecture is increasingly becoming a bottleneck for innovation. Headless commerce, with its decoupled frontend and backend, offers a compelling solution for businesses seeking agility and scalability.</p>
        
        <h2>The Monolithic Constraint</h2>
        <p>For years, e-commerce platforms came as all-in-one suites. While convenient, this tight coupling meant that a change in the user interface often required significant backend adjustments.</p>
        
        <h2>Enter Headless Architecture</h2>
        <p>Headless commerce separates the presentation layer (head) from the commerce engine (body). Communication happens via APIs, allowing developers to build custom frontends using modern frameworks.</p>
        
        <h3>Key Benefits</h3>
        <ul>
            <li><strong>Omnichannel Experience:</strong> deliver content to web, mobile, smartwatches, and even IoT devices from a single backend.</li>
            <li><strong>Performance:</strong> Static site generation (SSG) and edge caching can significantly reduce load times.</li>
            <li><strong>Flexibility:</strong> Swap out frontend technologies without disrupting backend operations.</li>
        </ul>
    `;

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
                <article className="pt-40 pb-20 px-6">
                    <div className="max-w-3xl mx-auto">
                        {/* Back Button */}
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            <Text size="sm">Back to Blog</Text>
                        </Link>

                        {/* Header */}
                        <div className="mb-12">
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <Badge className="border-accent/20 text-accent bg-accent/5">
                                    {article.category}
                                </Badge>
                                <div className="flex items-center gap-2 text-white/40">
                                    <Calendar className="w-3 h-3" aria-hidden="true" />
                                    <Text size="xs" variant="muted">
                                        {article.date}
                                    </Text>
                                </div>
                                <div className="flex items-center gap-2 text-white/40">
                                    <Clock className="w-3 h-3" aria-hidden="true" />
                                    <Text size="xs" variant="muted">
                                        {article.readTime}
                                    </Text>
                                </div>
                                {article.updatedDate && (
                                    <Text size="xs" variant="muted" className="italic">
                                        Updated:{" "}
                                        {new Date(article.updatedDate).toLocaleDateString()}
                                    </Text>
                                )}
                            </div>

                            {/* Title */}
                            <Heading
                                level={1}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
                            >
                                {article.title}
                            </Heading>

                            {/* Author Info - E-E-A-T */}
                            <div className="flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                                    <User className="w-6 h-6 text-accent" aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <Text size="sm" className="font-medium text-white mb-1">
                                        {author.name}
                                    </Text>
                                    <Text size="xs" variant="muted">
                                        {author.role}
                                    </Text>
                                </div>
                                <div className="hidden md:flex gap-2">
                                    {author.social.twitter && (
                                        <a
                                            href={author.social.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Text size="xs">Twitter</Text>
                                        </a>
                                    )}
                                    {author.social.linkedin && (
                                        <a
                                            href={author.social.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Text size="xs">LinkedIn</Text>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Tags */}
                            {article.tags.length > 0 && (
                                <div className="mt-6 flex flex-wrap items-center gap-2">
                                    <Tag
                                        className="w-4 h-4 text-muted-foreground"
                                        aria-hidden="true"
                                    />
                                    {article.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            href={`/blog?tag=${encodeURIComponent(tag)}`}
                                        >
                                            <Badge className="hover:bg-white/5 transition-colors cursor-pointer border-white/20">
                                                {tag}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Separator className="mb-12" />

                        {/* Content */}
                        <div
                            className="prose prose-invert prose-lg max-w-none 
                            prose-headings:font-medium prose-headings:tracking-tight 
                            prose-p:text-white/70 prose-p:leading-relaxed
                            prose-a:text-accent prose-a:no-underline prose-a:border-b prose-a:border-accent/30 hover:prose-a:border-accent transition-colors
                            prose-ul:text-white/70 prose-li:marker:text-white/30
                            prose-strong:text-white prose-strong:font-semibold"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />

                        <Separator className="my-12" />

                        {/* Author Bio - E-E-A-T */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0">
                                    <User className="w-8 h-8 text-accent" aria-hidden="true" />
                                </div>
                                <div className="flex-1">
                                    <Heading level={3} className="text-xl font-bold mb-2">
                                        About {author.name}
                                    </Heading>
                                    <Text variant="muted" className="mb-4">
                                        {author.bio}
                                    </Text>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {author.expertise.map((skill) => (
                                            <Badge key={skill} className="text-xs border-white/20">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        {author.social.twitter && (
                                            <a
                                                href={author.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                            >
                                                Twitter
                                            </a>
                                        )}
                                        {author.social.linkedin && (
                                            <a
                                                href={author.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                            >
                                                LinkedIn
                                            </a>
                                        )}
                                        {author.social.github && (
                                            <a
                                                href={author.social.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <Footer />
            </main>
        </>
    );
}
