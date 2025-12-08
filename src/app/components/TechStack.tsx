"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Layout, Share2 } from "lucide-react";

import { cn } from "@/lib/utils";

// Standalone Graphic Component
export function TechStackGraphic({
    className,
    isHovered = false,
}: {
    className?: string;
    isHovered?: boolean;
}) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center pointer-events-none",
                className
            )}
        >
            <div
                className="relative h-[400px] w-[300px] md:w-[400px]"
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(55deg) rotateZ(45deg) rotateY(0deg)",
                }}
            >
                {/* Layer 4: Pink (Bottom - UI) */}
                <GlassLayer
                    color="pink"
                    index={0}
                    isHovered={isHovered}
                    icon={<Layout className="h-10 w-10 text-pink-500" />}
                    label="UI / UX"
                />

                {/* Layer 3: Purple (Server) */}
                <GlassLayer
                    color="purple"
                    index={1}
                    isHovered={isHovered}
                    icon={<Cloud className="h-10 w-10 text-purple-500" />}
                    label="Server"
                />

                {/* Layer 2: Green (Network) */}
                <GlassLayer
                    color="green"
                    index={2}
                    isHovered={isHovered}
                    icon={<Share2 className="h-10 w-10 text-emerald-500" />}
                    label="Network"
                />

                {/* Layer 1: Blue (Top - Code) */}
                <GlassLayer
                    color="blue"
                    index={3}
                    isHovered={isHovered}
                    icon={<Code2 className="h-10 w-10 text-blue-500" />}
                    label="Logic"
                    isTop
                >
                    <div className="absolute right-4 top-4 rounded-full border border-blue-500/30 bg-blue-500/10 p-1.5">
                        <Database className="h-4 w-4 text-blue-400" />
                    </div>
                </GlassLayer>
            </div>
        </div>
    );
}

// Full Section Component (Maintained for backward compatibility or if needed elsewhere,
// but we will likely remove its usage from page.tsx)
export function TechStack() {
    return (
        <section className="relative w-full overflow-hidden bg-[#050505] py-32 perspective-1000">
            <TechStackGraphic isHovered={true} />
        </section>
    );
}

function GlassLayer({
    color,
    index,
    isHovered,
    icon,
    label,
    isTop,
    children,
}: {
    color: "blue" | "green" | "purple" | "pink";
    index: number;
    isHovered: boolean;
    icon: React.ReactNode;
    label: string;
    isTop?: boolean;
    children?: React.ReactNode;
}) {
    // Animation Logic
    const collapsedGap = 20;
    const expandedGap = 35; // Reduced to 35 to prevent overflow
    const targetZ = index * (isHovered ? expandedGap : collapsedGap);

    // Map colors to hex/classes
    const colors = {
        blue: {
            border: "border-blue-500",
            glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
            bg: "bg-blue-500/5",
            text: "text-blue-500",
        },
        green: {
            border: "border-emerald-500",
            glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
            bg: "bg-emerald-500/5",
            text: "text-emerald-500",
        },
        purple: {
            border: "border-purple-500",
            glow: "shadow-[0_0_30px_rgba(139,92,246,0.3)]",
            bg: "bg-purple-500/5",
            text: "text-purple-500",
        },
        pink: {
            border: "border-pink-500",
            glow: "shadow-[0_0_30px_rgba(236,72,153,0.3)]",
            bg: "bg-pink-500/5",
            text: "text-pink-500",
        },
    };

    const c = colors[color];

    return (
        <motion.div
            initial={false}
            animate={{
                translateZ: targetZ,
                opacity: 1, // Keep opacity consistently high
            }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom spring-like ease
            }}
            className={`absolute inset-0 rounded-2xl border ${c.border} ${c.bg} backdrop-blur-[2px]`}
            style={{
                transformStyle: "preserve-3d",
                boxShadow: isTop
                    ? `0 0 60px rgba(0,0,0,0.6), inset 0 0 30px rgba(255,255,255,0.1)`
                    : `0 10px 30px -10px rgba(0,0,0,0.5)`, // Added shadow for lower layers to pop
                background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`, // Increased opacity
            }}
        >
            {/* Glowing Edge Effect */}
            <div
                className={`absolute inset-[-1px] rounded-2xl opacity-60 blur-md ${c.bg} ${c.border}`} // Increased opacity from 40 to 60
            />

            {/* Content Container (Counter-rotated slightly or just flat on surface) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Icon */}
                <div
                    className={`mb-4 rounded-xl border border-white/5 bg-black/20 p-3 shadow-xl backdrop-blur-sm ${c.glow}`}
                >
                    {icon}
                </div>

                {/* Simulated Content based on Layer Type */}
                {color === "pink" && ( // UI Layer
                    <div className="flex w-full flex-col gap-3 opacity-80 pt-2">
                        <div className="flex gap-2">
                            <div className="h-8 w-1/3 rounded-md bg-pink-500/20 shadow-sm border border-pink-500/20" />
                            <div className="h-8 w-2/3 rounded-md bg-pink-500/10 border border-pink-500/10" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-pink-500/40" />
                            <div className="h-2 w-full rounded-full bg-pink-500/10" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-1">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-6 rounded bg-pink-500/10 border border-pink-500/10"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {color === "purple" && ( // Server Layer
                    <div className="flex w-full items-center justify-between gap-2 pt-2 opacity-80">
                        {/* Database Cylinders */}
                        <div className="flex flex-col gap-1.5">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-3 w-12 rounded-full border border-purple-500/30 bg-purple-500/10"
                                />
                            ))}
                        </div>
                        {/* Data Stream Lines */}
                        <div className="flex flex-1 flex-col gap-2">
                            <div className="h-1 w-full rounded-full border-b border-purple-500/20 border-dashed" />
                            <div className="h-1 w-3/4 self-end rounded-full bg-purple-500/20" />
                            <div className="h-1 w-full rounded-full border-b border-purple-500/20 border-dashed" />
                        </div>
                    </div>
                )}

                {color === "green" && ( // Network Layer
                    <div className="relative h-20 w-full pt-2 opacity-80">
                        {/* Nodes */}
                        <div className="absolute left-2 top-2 h-3 w-3 rounded-full border border-emerald-500/50 bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                        <div className="absolute right-4 top-6 h-2 w-2 rounded-full border border-emerald-500/50 bg-emerald-500/20" />
                        <div className="absolute bottom-2 left-10 h-2.5 w-2.5 rounded-full border border-emerald-500/50 bg-emerald-500/20" />

                        {/* Connecting Lines */}
                        <svg
                            className="absolute inset-0 h-full w-full"
                            style={{ overflow: "visible" }}
                        >
                            <path
                                d="M18 14 L180 30"
                                stroke="rgba(16, 185, 129, 0.3)"
                                strokeWidth="1"
                                strokeDasharray="4 2"
                            />
                            <path
                                d="M18 14 L50 60"
                                stroke="rgba(16, 185, 129, 0.3)"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                )}

                {color === "blue" && ( // Logic Layer
                    <div className="flex w-full flex-col gap-2 pt-2 font-mono text-[10px] text-blue-400 opacity-90">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600">const</span>
                            <span className="text-blue-300">stack</span>
                            <span className="text-blue-600">=</span>
                        </div>
                        <div className="pl-4 flex flex-col gap-1 border-l border-blue-500/20">
                            <div className="bg-blue-500/10 px-1 rounded w-fit">new Logic();</div>
                            <div className="bg-blue-500/5 px-1 rounded w-fit text-blue-500/60">
                                await init();
                            </div>
                        </div>
                        <div className="flex gap-1 mt-1 justify-end">
                            <span className="text-blue-600">{"}"}</span>
                        </div>
                    </div>
                )}

                {/* Corner Accent */}
                <div
                    className={`absolute bottom-4 right-4 h-2 w-2 rounded-full ${c.bg} ${c.glow}`}
                />
            </div>

            {children}
        </motion.div>
    );
}
