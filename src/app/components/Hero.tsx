"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Text } from "./ui/Text";

export function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background"
        >
            {/* --- Optimized Grid Background (Static & Subtle) --- */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black 40%, transparent 85%)",
                }}
            />

            {/* --- Static Grid Accents --- */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
                {/* 1. Top Left Area - Always visible */}
                <div
                    className="absolute w-[60px] h-[60px] bg-[#1c1c1c] border border-white/[0.08]"
                    style={{ left: '60px', top: '180px' }}
                />

                {/* 2. Center-Left - Visible on larger mobile */}
                <div
                    className="absolute w-[60px] h-[60px] bg-[#222] border border-white/[0.1]"
                    style={{ left: '240px', top: '360px' }}
                />

                {/* 3. Lower Left */}
                <div
                    className="absolute w-[60px] h-[60px] bg-[#1a1a1a] border border-white/[0.05]"
                    style={{ left: '120px', top: '540px' }}
                />

                {/* 4. Desktop Right (Hidden on mobile) */}
                <div
                    className="absolute w-[60px] h-[60px] bg-[#1c1c1c] border border-white/[0.1] hidden md:block"
                    style={{ left: '780px', top: '120px' }}
                />

                {/* 5. Desktop Far Right */}
                <div
                    className="absolute w-[60px] h-[60px] bg-[#181818] border border-white/[0.05] hidden lg:block"
                    style={{ left: '1020px', top: '420px' }}
                />

                {/* Plus Signs (Aligned to intersection points) */}
                <div className="absolute text-white/20 text-xs font-mono" style={{ left: '300px', top: '240px' }}>+</div>
                <div className="absolute text-white/20 text-xs font-mono hidden md:block" style={{ left: '840px', top: '540px' }}>+</div>
            </div>

            {/* --- Film Grain Overlay --- */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('/noise.png')" }}
            />

            {/* --- Bottom Fade --- */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <Container className="relative z-10">
                <div className="relative flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* --- Headline --- */}
                    <div className="relative z-20">
                        <motion.h1
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white px-4 md:px-0 leading-[1.1] tracking-tight"
                        >
                            I&apos;m a Backend Engineer
                            <br />
                            passionate about{" "}
                            <span className="text-accent inline-block">Scalability</span>
                        </motion.h1>
                    </div>

                    {/* --- Subtext --- */}
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 max-w-2xl mx-auto"
                    >
                        <Text size="lg" className="text-zinc-400 leading-relaxed font-normal">
                            I build{" "}
                            <span className="text-zinc-200 font-medium">digital fortresses</span>{" "}
                            that are scalable, efficient, and secure.
                        </Text>
                    </motion.div>

                    {/* --- CTA Buttons --- */}
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-10 flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button variant="primary" size="lg">
                            Let&apos;s Talk
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>

                        <Button variant="secondary" size="lg">
                            View Work
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
