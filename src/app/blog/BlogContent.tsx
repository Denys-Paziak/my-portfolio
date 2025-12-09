"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { articles } from "@/data/articles";
import { cn } from "@/lib/utils";

import { Footer } from "../components/Footer";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Text } from "../components/ui/Text";

const ITEMS_PER_PAGE = 6;

export default function BlogContent() {
    const [currentPage, setCurrentPage] = useState(1);

    // Filter articles
    const filteredArticles = articles;

    const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentArticles = filteredArticles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        align="center"
                        badgeText="Neural Feed"
                        title="Latest"
                        subtitle="Insights"
                        description="Thoughts on engineering, design, and the future of digital products."
                        className="mb-20"
                    />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        <AnimatePresence mode="wait">
                            {currentArticles.map((article, index) => (
                                <Link href={`/blog/${article.slug}`} key={article.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="group relative bg-white/[0.02] border border-white/10 rounded-[var(--radius-3xl)] overflow-hidden hover:border-white/20 transition-colors duration-300 flex flex-col p-8 md:p-10"
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center gap-3">
                                                <Text
                                                    variant="mono"
                                                    size="xs"
                                                    className="text-white/40"
                                                >
                                                    /{article.id}
                                                </Text>
                                                <Text
                                                    size="xs"
                                                    className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                                                >
                                                    {article.category}
                                                </Text>
                                            </div>
                                            <div className="flex items-center gap-2 text-white/40">
                                                <Clock className="w-3 h-3" />
                                                <Text size="xs" variant="muted">
                                                    {article.readTime}
                                                </Text>
                                            </div>
                                        </div>

                                        <Heading
                                            level={3}
                                            className="text-2xl md:text-3xl font-medium mb-4 group-hover:text-white transition-colors"
                                        >
                                            {article.title}
                                        </Heading>

                                        <Text
                                            size="lg"
                                            variant="muted"
                                            className="line-clamp-3 mb-8 flex-grow"
                                        >
                                            {article.description}
                                        </Text>

                                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                            <Text size="sm" className="text-white/40">
                                                {article.date}
                                            </Text>
                                            <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                                                <Text size="sm" className="font-medium">
                                                    Read Article
                                                </Text>
                                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4">
                            <Button
                                variant="secondary"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-12 h-12 p-0 rounded-full"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono transition-all duration-300 border border-transparent",
                                            currentPage === i + 1
                                                ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/10"
                                        )}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <Button
                                variant="secondary"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 p-0 rounded-full"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
