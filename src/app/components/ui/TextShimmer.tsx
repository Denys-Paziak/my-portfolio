"use client";

import { cn } from "@/lib/utils";

interface TextShimmerProps {
    text: string;
    className?: string;
}

export function TextShimmer({ text, className }: TextShimmerProps) {
    return (
        <span
            className={cn(
                "inline-block text-transparent bg-clip-text bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:250%_100%] animate-shimmer",
                className
            )}
        >
            {text}
        </span>
    );
}
