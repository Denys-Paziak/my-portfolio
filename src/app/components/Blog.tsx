"use client";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import { articles } from "@/data/articles";
import { cn } from "@/lib/utils";

import { Heading } from "./ui/Heading";
import { SectionHeader } from "./ui/SectionHeader";
import { Text } from "./ui/Text";

export function Blog() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative py-20 md:py-32 w-full bg-background overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
                    <SectionHeader
                        align="center"
                        badgeText="Neural Feed"
                        title="Latest"
                        subtitle="Insights"
                        description="Thoughts on engineering, design, and the future of digital products."
                    />
                </div>

                {/* Article List */}
                <div className="flex flex-col space-y-8">
                    {articles.map((article, index) => (
                        <Link href={`/blog/${article.slug}`} key={article.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative border-b border-white/5 pb-8 md:pb-12 cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    {/* Content Group */}
                                    <div className="flex-1 space-y-4">
                                        {/* Meta Row */}
                                        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider">
                                            <span className={cn("font-medium", article.accent)}>
                                                {article.category}
                                            </span>
                                            <span className="text-white/10">•</span>
                                            <span className="text-white/40">{article.date}</span>
                                            <span className="text-white/10 hidden md:inline">
                                                •
                                            </span>
                                            <span className="text-white/40 hidden md:inline">
                                                {article.readTime} read
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <Heading
                                            level={3}
                                            className="text-3xl md:text-5xl font-medium text-white group-hover:text-white/60 transition-colors duration-300"
                                        >
                                            {article.title}
                                        </Heading>

                                        {/* Excerpt */}
                                        <Text className="text-white/50 max-w-2xl text-lg leading-relaxed line-clamp-2 group-hover:text-white/70 transition-colors">
                                            {article.excerpt}
                                        </Text>

                                        {/* Mobile Read More */}
                                        <div className="flex md:hidden items-center gap-2 text-white/40 text-sm mt-4">
                                            <span>Read Article</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Desktop Arrow Interaction */}
                                    <div className="hidden md:flex items-center justify-center pt-2 px-4">
                                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Reveal Image (Floating) */}
                                <AnimatePresence>
                                    {hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                x: mouseX,
                                                y: mouseY,
                                                translateX: "-50%",
                                                translateY: "-50%",
                                            }}
                                            className="fixed top-0 left-0 w-[400px] h-[250px] rounded-xl overflow-hidden pointer-events-none z-50 hidden md:block shadow-2xl"
                                        >
                                            <div
                                                className={cn(
                                                    "w-full h-full bg-gradient-to-br opacity-90",
                                                    article.color
                                                )}
                                            />
                                            {/* Noise & Texture */}
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
                                            <div className="absolute inset-0 border border-white/10 rounded-xl" />

                                            {/* Simulated Content */}
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <div className="h-2 w-1/3 bg-white/20 rounded-full mb-3" />
                                                <div className="h-8 w-3/4 bg-white/10 rounded-lg backdrop-blur-md" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
