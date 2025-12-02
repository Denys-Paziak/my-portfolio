"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?_01";

interface ScrambleRevealProps {
    text: string;
    className?: string;
    delay?: number;
    scrambleSpeed?: number;
    onComplete?: () => void;
}

export const ScrambleReveal = ({
    text,
    className = "",
    delay = 0,
    scrambleSpeed = SHUFFLE_TIME,
    onComplete,
}: ScrambleRevealProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const startScramble = () => {
            setIsScrambling(true);
            let pos = 0;

            intervalRef.current = setInterval(() => {
                const scrambled = text
                    .split("")
                    .map((char, index) => {
                        if (pos / CYCLES_PER_LETTER > index) {
                            return char;
                        }

                        const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                        const randomChar2 = CHARS[Math.floor(Math.random() * CHARS.length)];

                        return Math.random() > 0.5 ? randomChar : randomChar2;
                    })
                    .join("");

                setDisplayText(scrambled);
                pos++;

                if (pos >= text.length * CYCLES_PER_LETTER) {
                    clearInterval(intervalRef.current!);
                    setDisplayText(text);
                    setIsScrambling(false);
                    if (onComplete) onComplete();
                }
            }, scrambleSpeed);
        };

        timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [text, delay, scrambleSpeed, onComplete]);

    return <span className={className}>{displayText}</span>;
};
