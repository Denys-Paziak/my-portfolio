"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Smartphone, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

// Reusing the GlassLayer concept but tailored for mobile dimensions
function MobileLayer({
    color,
    index,
    isHovered,
    icon,
    label,
    isBase,
}: {
    color: "emerald" | "teal" | "cyan";
    index: number;
    isHovered: boolean;
    icon: React.ReactNode;
    label: string;
    isBase?: boolean;
}) {
    // Animation Logic
    const collapsedGap = 15;
    const expandedGap = 35;
    const translateZ = index * (isHovered ? expandedGap : collapsedGap);

    const colors = {
        emerald: { border: "border-emerald-500", bg: "bg-emerald-500/5", text: "text-emerald-500" },
        teal: { border: "border-teal-500", bg: "bg-teal-500/5", text: "text-teal-500" },
        cyan: { border: "border-cyan-500", bg: "bg-cyan-500/5", text: "text-cyan-500" },
    };

    const c = colors[color];

    return (
        <motion.div
            initial={false}
            animate={{ translateZ }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "absolute inset-0 rounded-[2.5rem] border backdrop-blur-[2px]",
                c.border,
                c.bg,
                isBase ? "bg-black/80 border-white/20" : ""
            )}
            style={{
                transformStyle: "preserve-3d",
                boxShadow: isBase
                    ? "0 0 40px rgba(0,0,0,0.8)"
                    : `0 10px 30px -10px rgba(0,0,0,0.5), inset 0 0 20px ${isHovered ? "rgba(255,255,255,0.1)" : "transparent"}`,
            }}
        >
            {/* Screen/Content Content */}
            <div className="flex h-full w-full flex-col items-center justify-center p-6">
                <div className={cn("mb-2 rounded-full p-3 bg-white/5 backdrop-blur-md", c.text)}>
                    {icon}
                </div>
                {/* Lines */}
                <div className="space-y-2 w-full opacity-50">
                    <div
                        className={cn(
                            "h-1 w-2/3 rounded-full mx-auto",
                            isBase ? "bg-white/20" : c.bg.replace("/5", "/40")
                        )}
                    />
                    <div
                        className={cn(
                            "h-1 w-1/2 rounded-full mx-auto",
                            isBase ? "bg-white/10" : c.bg.replace("/5", "/20")
                        )}
                    />
                </div>
            </div>

            {/* Phone Shine (Base Only) */}
            {isBase ? (
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            ) : null}
        </motion.div>
    );
}

export function MobileGraphic({ isHovered }: { isHovered: boolean }) {
    return (
        <div className="relative flex items-center justify-center pointer-events-none perspective-1000">
            <div
                className="relative h-[420px] w-[220px]" // Phone Dimensions
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(60deg) rotateZ(-30deg) rotateY(0deg)", // Isometric rotation
                }}
            >
                {/* Base (The Phone Chassis) */}
                <MobileLayer
                    color="emerald"
                    index={0}
                    isHovered={isHovered}
                    icon={<Smartphone className="h-8 w-8 text-white/50" />}
                    label="Device"
                    isBase
                />

                {/* Layer 1: Native Performance */}
                <MobileLayer
                    color="teal"
                    index={1}
                    isHovered={isHovered}
                    icon={<Cpu className="h-8 w-8" />}
                    label="Core"
                />

                {/* Layer 2: UI/UX */}
                <MobileLayer
                    color="cyan"
                    index={2}
                    isHovered={isHovered}
                    icon={<Layers className="h-8 w-8" />}
                    label="Interface"
                />

                {/* Top Layer: Interaction */}
                <MobileLayer
                    color="emerald"
                    index={3}
                    isHovered={isHovered}
                    icon={<Zap className="h-8 w-8" />}
                    label="Active"
                />
            </div>
        </div>
    );
}
