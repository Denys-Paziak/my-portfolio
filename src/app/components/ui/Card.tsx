import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outline";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "glass", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-[var(--radius-3xl)] transition-all",
                    variant === "glass" &&
                        "bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)]",
                    variant === "outline" && "border border-white/10 bg-transparent",
                    variant === "default" && "bg-card text-card-foreground border",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Card.displayName = "Card";
