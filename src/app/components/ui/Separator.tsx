import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    variant?: "default" | "technical";
}

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
    ({ className, orientation = "horizontal", variant = "default", ...props }, ref) => {
        const styles = cn(
            "shrink-0 bg-[var(--glass-border)]",

            // Orientation
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",

            // Variants
            variant === "technical" &&
                "bg-transparent border-t border-dashed border-[var(--glass-border)]",

            className
        );

        return <div ref={ref} className={styles} {...props} />;
    }
);

Separator.displayName = "Separator";
