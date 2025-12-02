"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Text } from "./ui/Text";
import { ArrowRight } from "lucide-react";

// Grid Cell Component for performance
const GridCell = ({
    active,
    type,
}: {
    active: boolean;
    type?: "square" | "plus" | "corner" | "filled";
}) => {
    return (
        <div className="relative w-full h-full border-[0.5px] border-white/[0.1] flex items-center justify-center">
            {active && (
                <div className="w-full h-full">
                    {type === "filled" && <div className="w-full h-full bg-white/[0.07]" />}
                    {type === "square" && (
                        <div className="w-full h-full bg-white/[0.1] border border-white/[0.2]" />
                    )}
                    {type === "plus" && (
                        <div className="flex items-center justify-center w-full h-full">
                            <div className="text-white/[0.4] text-xs font-mono">+</div>
                        </div>
                    )}
                    {type === "corner" && (
                        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/[0.4]" />
                    )}
                </div>
            )}
        </div>
    );
};

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const [cells, setCells] = useState<any[]>([]);

    // Generate Grid - оптимізовано для мобілок
    useEffect(() => {
        const generateGrid = () => {
            const isMobile = window.innerWidth < 768;
            const cellSize = isMobile ? 80 : 60; // Більші клітинки на мобілках
            const maxCells = isMobile ? 200 : 1000; // Обмеження кількості клітинок

            const cols = Math.ceil(window.innerWidth / cellSize);
            const rows = Math.ceil(window.innerHeight / cellSize);
            const totalCells = Math.min(cols * rows, maxCells);
            const newCells = [];

            for (let i = 0; i < totalCells; i++) {
                const isActive = Math.random() < (isMobile ? 0.04 : 0.06); // Менше активних на мобілках
                const typeRandom = Math.random();
                let type: "square" | "plus" | "corner" | "filled" = "filled";

                if (typeRandom < 0.5) type = "filled";
                else if (typeRandom < 0.75) type = "plus";
                else if (typeRandom < 0.9) type = "square";
                else type = "corner";

                newCells.push({
                    id: i,
                    active: isActive,
                    type: type,
                });
            }
            setCells(newCells);
        };

        generateGrid();

        // Debounce resize для оптимізації
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(generateGrid, 250);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-background"
        >
            {/* --- Interactive Grid Background --- */}
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden opacity-100 pointer-events-none">
                <div
                    className="grid w-full h-full"
                    style={{
                        gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
                        gridAutoRows: "60px",
                        justifyContent: "center",
                        maskImage: "radial-gradient(circle at center, black, transparent 90%)",
                        WebkitMaskImage:
                            "radial-gradient(circle at center, black, transparent 90%)",
                    }}
                >
                    {cells.map((cell) => (
                        <GridCell key={cell.id} active={cell.active} type={cell.type} />
                    ))}
                </div>
            </div>

            {/* --- Film Grain Overlay --- */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: "url('/noise.png')" }}
            />

            {/* --- Bottom Fade --- */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <Container className="relative z-10">
                <div className="relative flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* --- Headline --- */}
                    <div className="relative z-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white"
                        >
                            I&apos;m a Backend Engineer
                            <br />
                            passionate about{" "}
                            <span className="text-accent inline-block">Scalability</span>
                        </motion.h1>
                    </div>

                    {/* --- Subtext --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                        initial={{ opacity: 0, y: 20 }}
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
