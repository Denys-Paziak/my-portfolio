"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { projects } from "@/data/projects";

import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { SectionHeader } from "./ui/SectionHeader";
import { Text } from "./ui/Text";

function ProjectCard({
    project,
    index,
    range,
    targetScale,
}: {
    project: (typeof projects)[0];
    index: number;
    range: [number, number];
    targetScale: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div
            ref={containerRef}
            className="h-auto md:h-screen flex items-start justify-center relative md:sticky md:top-0 px-4 md:px-8 mb-20 md:mb-0 pointer-events-none"
        >
            <motion.div
                style={{
                    scale: isMobile ? 1 : scale,
                    top: isMobile ? 0 : `calc(12vh + ${index * 25}px)`,
                }}
                className="pointer-events-auto relative w-full max-w-7xl h-auto md:h-[70vh] min-h-[500px] rounded-[var(--radius-3xl)] bg-[var(--card)] border border-[var(--glass-border)] overflow-hidden shadow-2xl origin-top flex flex-col-reverse md:flex-row will-change-transform backface-hidden"
            >
                {/* Left: Content Section (Bottom on mobile) */}
                <div className="w-full md:w-1/2 h-auto md:h-full flex-1 p-6 md:p-12 flex flex-col justify-start md:border-r border-white/5 relative z-10 bg-[var(--card)]">
                    {/* Category & Strategic Context */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <Text
                            variant="mono"
                            size="xs"
                            className="text-emerald-500 tracking-widest uppercase"
                        >
                            {project.category}
                        </Text>
                    </div>

                    {/* Main Title & Architecture */}
                    <div className="space-y-4 mb-8">
                        <Heading
                            level={3}
                            className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2"
                        >
                            {project.title}
                        </Heading>
                        {project.subtitle ? (
                            <Text size="lg" className="text-white font-medium">
                                {project.subtitle}
                            </Text>
                        ) : null}
                        <Text
                            size="base"
                            className="leading-relaxed text-white/60 max-w-md line-clamp-3 md:line-clamp-none"
                        >
                            {project.description}
                        </Text>
                    </div>

                    {/* Technical Specifications (SEO & Information) */}
                    <div className="mt-auto">
                        <div className="h-px w-full bg-white/5 mb-6" />
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <Text
                                    size="xs"
                                    variant="muted"
                                    className="mb-2 uppercase tracking-wider opacity-60"
                                >
                                    Core Stack
                                </Text>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 2).map((t, i) => (
                                        <span key={i} className="text-sm text-white/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Text
                                    size="xs"
                                    variant="muted"
                                    className="mb-2 uppercase tracking-wider opacity-60"
                                >
                                    Infrastructure
                                </Text>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(2).map((t, i) => (
                                        <span key={i} className="text-sm text-white/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Button variant="secondary" size="lg" className="group w-full md:w-auto">
                            Explore Solution
                            <ArrowUpRight
                                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Button>
                    </div>
                </div>

                {/* Right: Visual Section - Restored on Mobile (Top on mobile) */}
                <div className="w-full md:w-1/2 h-[250px] md:h-full relative overflow-hidden bg-white/[0.02] flex items-center justify-center p-8 shrink-0 border-b md:border-b-0 border-white/5">
                    {/* Minimal UI Window Mockup */}
                    <div className="relative w-full aspect-video rounded-xl bg-[#0A0A0A] border border-white/10 shadow-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Window Header */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 space-x-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>

                        {/* Window Content Placeholder - Abstract UI */}
                        <div className="absolute inset-0 top-8 p-6 flex flex-col gap-4 opacity-50">
                            {/* Header Skeleton */}
                            <div className="flex items-center justify-between">
                                <div className="h-4 w-1/3 rounded-full bg-white/10" />
                                <div className="h-8 w-8 rounded-full bg-white/10" />
                            </div>

                            {/* Main Content Skeleton */}
                            <div className="flex gap-4 h-full">
                                <div className="w-1/4 h-2/3 rounded-lg bg-white/5" />
                                <div className="flex-1 space-y-3">
                                    <div className="h-32 rounded-lg bg-white/5" />
                                    <div className="h-4 w-3/4 rounded-full bg-white/5" />
                                    <div className="h-4 w-1/2 rounded-full bg-white/5" />
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: _scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="relative bg-background w-full">
            {/* Intro - Non-Sticky, Normal Flow */}
            <div className="pt-24 md:pt-32 pb-12 md:pb-16 flex items-center justify-center">
                <SectionHeader
                    badgeText="Selected Works"
                    title="Featured"
                    subtitle="Projects"
                    description="I craft award-winning digital products that solve complex problems. Each project represents a unique challenge in engineering, design, and performance optimization."
                />
            </div>

            {/* Projects Stack */}
            <div className="relative z-10">
                {projects.map((project, index) => {
                    const targetScale = 1 - (projects.length - index) * 0.02;
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            range={[index * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
