import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    variant?: "default" | "gradient" | "mono";
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 1, variant = "default", children, ...props }, ref) => {
        const Tag = `h${level}` as React.ElementType;

        const styles = cn(
            "font-bold tracking-tight text-foreground",

            // Level styles
            level === 1 && "text-4xl md:text-5xl lg:text-6xl leading-[1.1]",
            level === 2 && "text-3xl md:text-4xl lg:text-5xl leading-tight",
            level === 3 && "text-2xl md:text-3xl leading-snug",
            level === 4 && "text-xl md:text-2xl leading-snug",
            level === 5 && "text-lg md:text-xl leading-snug",
            level === 6 && "text-base md:text-lg leading-snug",

            // Variant styles
            variant === "gradient" &&
                "text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60",
            variant === "mono" && "font-mono tracking-tighter uppercase",

            className
        );

        return (
            <Tag ref={ref} className={styles} {...props}>
                {children}
            </Tag>
        );
    }
);

Heading.displayName = "Heading";
