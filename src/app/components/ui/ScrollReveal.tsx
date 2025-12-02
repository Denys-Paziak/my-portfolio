"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface ScrollRevealProps {
    text: string;
    progress: MotionValue<number>;
    range?: [number, number]; // The range of scroll progress [start, end] during which this text should reveal
    className?: string;
}

export function ScrollReveal({ text, progress, range = [0, 1], className }: ScrollRevealProps) {
    const characters = text.split("");
    const [start, end] = range;
    const segmentLength = (end - start) / characters.length;

    return (
        <span className={className}>
            {characters.map((char, i) => {
                const charStart = start + i * segmentLength;
                const charEnd = charStart + segmentLength;
                return (
                    <Character
                        key={i}
                        char={char}
                        progress={progress}
                        range={[charStart, charEnd]}
                    />
                );
            })}
        </span>
    );
}

function Character({
    char,
    progress,
    range,
}: {
    char: string;
    progress: MotionValue<number>;
    range: [number, number];
}) {
    const opacity = useTransform(progress, range, [0.4, 1]); // Increased base opacity
    const color = useTransform(progress, range, ["#ffffff60", "#ffffff"]); // Brighter dim color

    return (
        <motion.span style={{ opacity, color }} className="inline-block">
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
}
