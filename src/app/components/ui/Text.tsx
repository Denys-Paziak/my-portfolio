import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextProps extends HTMLAttributes<HTMLElement> {
    variant?: "default" | "muted" | "mono" | "gradient";
    size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
    weight?: "light" | "normal" | "medium" | "semibold" | "bold";
    as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Text = forwardRef<HTMLElement, TextProps>(
    ({ className, variant = "default", size, weight, as: Tag = "p", children, ...props }, ref) => {
        const styles = cn(
            "leading-relaxed",

            // Variant styles
            variant === "default" && "text-foreground",
            variant === "muted" && "text-muted-foreground",
            variant === "mono" && "font-mono text-muted-foreground",
            variant === "gradient" && "text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60",

            // Size styles (default to base if not specified and not overridden by variant defaults in legacy code)
            !size && variant !== "mono" && "text-base",
            !size && variant === "mono" && "text-sm",

            size === "xs" && "text-xs",
            size === "sm" && "text-sm",
            size === "base" && "text-base",
            size === "lg" && "text-lg md:text-xl",
            size === "xl" && "text-xl md:text-2xl",
            size === "2xl" && "text-2xl md:text-3xl",
            size === "3xl" && "text-3xl md:text-4xl",
            size === "4xl" && "text-4xl md:text-5xl",
            size === "5xl" && "text-5xl md:text-6xl",
            size === "6xl" && "text-6xl md:text-7xl",

            // Weight styles
            weight === "light" && "font-light",
            weight === "normal" && "font-normal",
            weight === "medium" && "font-medium",
            weight === "semibold" && "font-semibold",
            weight === "bold" && "font-bold",

            className
        );

        return (
            // @ts-ignore
            <Tag ref={ref} className={styles} {...props}>
                {children}
            </Tag>
        );
    }
);

Text.displayName = "Text";
