"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Code2, Cpu, Globe, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { Button } from "./ui/Button";
import { projects } from "@/data/projects";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe,
    Zap,
    Cpu,
    Code2,
};

function ProjectCard({
    project,
    index,
    range,
    targetScale
}: {
    project: typeof projects[0],
    index: number,
    range: [number, number],
    targetScale: number
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div
            ref={containerRef}
            className="h-screen flex items-start justify-center sticky top-0 px-4 md:px-8"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(12vh + ${index * 25}px)`
                }}
                className="relative w-full max-w-7xl h-[70vh] min-h-[500px] rounded-[var(--radius-3xl)] bg-[var(--card)] border border-[var(--glass-border)] overflow-hidden shadow-2xl origin-top flex flex-col md:flex-row will-change-transform backface-hidden"
            >
                {/* Left: Content Section */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--glass-border)] relative z-10">

                    {/* Header Details */}
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            {(() => {
                                const IconComponent = iconMap[project.icon] || Globe;
                                return (
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-[var(--glass-border)]", project.color.replace("bg-", "text-"))}>
                                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                                    </div>
                                );
                            })()}
                            <Text variant="mono" size="xs" className="text-white/40 tracking-wider">
                                PROJECT_ID: {project.id}
                            </Text>
                        </div>
                        <Text size="xs" as="div" className="px-3 py-1 rounded-full border border-[var(--glass-border)] bg-white/5 font-medium text-white/60 uppercase tracking-wide">
                            Deployed
                        </Text>
                    </div>

                    {/* Main Title */}
                    <div className="mt-6 md:mt-0 space-y-4">
                        <Heading level={3} className="text-4xl md:text-6xl tracking-tighter leading-[0.95] text-balance">
                            {project.title}
                        </Heading>
                        <Text size="lg" className="leading-relaxed max-w-md text-balance">
                            {project.description}
                        </Text>
                    </div>

                    {/* Footer / Tech Stack */}
                    <div>
                        <div className="h-px w-full bg-gradient-to-r from-[var(--glass-border)] to-transparent mb-6" />
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t, i) => (
                                <Text key={i} variant="mono" size="xs" as="span" className="px-3 py-1.5 rounded-lg font-medium bg-white/5 border border-[var(--glass-border)] text-white/60 hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                    {t}
                                </Text>
                            ))}
                        </div>

                        <Button variant="primary" size="lg" className="group">
                            View Case Study
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
                        </Button>
                    </div>
                </div>

                {/* Right: Visual Section */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-background">
                    {/* Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

                    {/* Radial Glow */}
                    <div className={cn(
                        "absolute inset-0 opacity-20 blur-[100px]",
                        project.color
                    )} />

                    {/* Abstract Composition */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-[70%] h-[70%] border border-[var(--glass-border)] rounded-2xl bg-white/5 backdrop-blur-sm rotate-[-3deg] group-hover:rotate-0 transition-transform duration-700 ease-out shadow-2xl overflow-hidden">
                            {/* Inner Card Details */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                            {/* Decorative Lines */}
                            <div className="absolute top-8 left-8 right-8 h-px bg-[var(--glass-border)]" />
                            <div className="absolute bottom-8 left-8 right-8 h-px bg-[var(--glass-border)]" />

                            {/* Center Circle */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-[var(--glass-border)] flex items-center justify-center">
                                <div className={cn("w-16 h-16 rounded-full opacity-30 blur-lg", project.color)} />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Corners */}
                    <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-[var(--glass-border)]" />
                    <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-[var(--glass-border)]" />
                </div>

            </motion.div>
        </div>
    );
}

export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative bg-background w-full">

            {/* Intro - Non-Sticky, Normal Flow */}
            <div className="pt-20 md:pt-24 pb-12 md:pb-16 flex items-center justify-center">
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
                    const targetScale = 1 - ((projects.length - index) * 0.02);
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
