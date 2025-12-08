"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

// Orbit path component
function OrbitPath({
    radius,
    speed,
    delay,
    rotateX,
    rotateY,
    color,
    isHovered,
}: {
    radius: number;
    speed: number;
    delay: number;
    rotateX: number;
    rotateY: number;
    color: string;
    isHovered: boolean;
}) {
    return (
        <motion.div
            className="absolute left-1/2 top-1/2 rounded-full border"
            style={{
                width: radius * 2,
                height: radius * 2,
                marginLeft: -radius,
                marginTop: -radius,
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
            }}
            animate={{
                rotateZ: [0, 360],
                borderColor: isHovered ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
            }}
            transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: delay,
            }}
        >
            {/* Particle on the orbit */}
            <motion.div
                className="absolute top-0 left-1/2 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-white"
                animate={{
                    scale: isHovered ? 1.5 : 1,
                    boxShadow: isHovered
                        ? "0 0 15px rgba(255,255,255,1)"
                        : "0 0 10px rgba(255,255,255,0.8)",
                }}
            />
        </motion.div>
    );
}

// Wave Spline for the "Neural" look
function NeuralWave({ delay, isHovered }: { delay: number; isHovered: boolean }) {
    return (
        <motion.div
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
        >
            <svg
                viewBox="0 0 200 200"
                className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 opacity-30"
            >
                <motion.path
                    d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: isHovered ? 1 : 0.6,
                        opacity: isHovered ? 0.6 : 0.2,
                        strokeWidth: isHovered ? "1" : "0.5",
                        d: isHovered
                            ? "M100,10 C150,10 190,50 190,100 C190,150 150,190 100,190 C50,190 10,150 10,100 C10,50 50,10 100,10"
                            : "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                    }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>
        </motion.div>
    );
}

export function AIGraphic({ isHovered }: { isHovered: boolean }) {
    return (
        <div className="relative flex h-[400px] w-full items-center justify-center perspective-1000">
            {/* Core Sphere */}
            <motion.div
                className={cn(
                    "relative z-10 h-32 w-32 rounded-full",
                    "bg-gradient-to-br from-white/20 to-white/5",
                    "shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]",
                    "backdrop-blur-sm border border-white/10",
                    "transition-all duration-700"
                )}
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    boxShadow: isHovered
                        ? "inset 0 0 30px rgba(255,255,255,0.3), 0 0 50px rgba(255,255,255,0.2)"
                        : "inset 0 0 20px rgba(255,255,255,0.1), 0 0 0 rgba(0,0,0,0)",
                }}
            >
                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/80 to-transparent opacity-80" />
            </motion.div>

            {/* Neural Waves Container */}
            <div
                className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-700",
                    isHovered ? "opacity-100 scale-110" : "opacity-40 scale-90"
                )}
            >
                {[...Array(5)].map((_, i) => (
                    <NeuralWave key={i} delay={i * 2} isHovered={isHovered} />
                ))}

                {/* Rotating Rings with different axes */}
                <OrbitPath
                    radius={100}
                    speed={15}
                    delay={0}
                    rotateX={70}
                    rotateY={0}
                    color="bg-blue-400"
                    isHovered={isHovered}
                />
                <OrbitPath
                    radius={120}
                    speed={20}
                    delay={1}
                    rotateX={70}
                    rotateY={45}
                    color="bg-purple-400"
                    isHovered={isHovered}
                />
                <OrbitPath
                    radius={110}
                    speed={18}
                    delay={2}
                    rotateX={70}
                    rotateY={-45}
                    color="bg-cyan-400"
                    isHovered={isHovered}
                />
            </div>

            {/* Connecting Lines / Network Effect overlay (Optional) */}
        </div>
    );
}
