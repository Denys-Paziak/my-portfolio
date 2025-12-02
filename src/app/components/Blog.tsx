"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { articles } from "@/data/articles";
import Link from "next/link";

export function Blog() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    function handleMouseMove(e: React.MouseEvent) {
        // For fixed positioning, we need the global client coordinates
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    }

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative py-20 md:py-24 w-full bg-background overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        align="center"
                        badgeText="Neural Feed"
                        title="Latest"
                        subtitle="Insights"
                        description="Thoughts on engineering, design, and the future of digital products."
                    />
                </div>

                {/* Article List */}
                <div className="flex flex-col">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-t border-[var(--glass-border)] py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/[0.02]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                                {/* Left: ID & Category */}
                                <div className="md:col-span-3 flex items-center gap-4">
                                    <Text variant="mono" size="xs" className="text-foreground/20">
                                        /{article.id}
                                    </Text>
                                    <Text
                                        size="xs"
                                        className={cn(
                                            "font-medium uppercase tracking-wider",
                                            article.accent
                                        )}
                                    >
                                        {article.category}
                                    </Text>
                                </div>

                                {/* Center: Title */}
                                <div className="md:col-span-6">
                                    <Link href={`/blog/${article.slug}`}>
                                        <Heading
                                            level={3}
                                            className="text-2xl md:text-4xl group-hover:text-foreground/70 transition-colors duration-300"
                                        >
                                            {article.title}
                                        </Heading>
                                    </Link>
                                </div>

                                {/* Right: Meta & Action */}
                                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-8">
                                    <div className="flex flex-col items-end gap-1">
                                        <Text size="sm" variant="muted">
                                            {article.date}
                                        </Text>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3 h-3" />
                                            <Text size="xs" variant="muted">
                                                {article.readTime} read
                                            </Text>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/blog/${article.slug}`}
                                        className="w-12 h-12 rounded-full border border-[var(--glass-border)] flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 transform group-hover:rotate-45"
                                        aria-label={`Read article: ${article.title}`}
                                    >
                                        <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Reveal Image (Floating) */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            x: springX,
                                            y: springY,
                                            translateX: "-50%",
                                            translateY: "-50%",
                                        }}
                                        className="fixed top-0 left-0 w-[400px] h-[250px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden md:block mix-blend-difference"
                                    >
                                        <div
                                            className={cn(
                                                "w-full h-full bg-gradient-to-br opacity-80",
                                                article.color
                                            )}
                                        />
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                    <div className="border-t border-[var(--glass-border)]" />
                </div>
            </div>
        </section>
    );
}
