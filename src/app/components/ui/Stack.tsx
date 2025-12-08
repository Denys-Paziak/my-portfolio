import { forwardRef, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
    direction?: "row" | "col";
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    align?: "start" | "center" | "end" | "stretch" | "baseline";
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
    ({ className, direction = "col", gap = 4, align, justify, wrap, children, ...props }, ref) => {
        const styles = cn(
            "flex",

            // Direction
            direction === "row" ? "flex-row" : "flex-col",

            // Gap
            gap === 0 && "gap-0",
            gap === 1 && "gap-1",
            gap === 2 && "gap-2",
            gap === 3 && "gap-3",
            gap === 4 && "gap-4",
            gap === 5 && "gap-5",
            gap === 6 && "gap-6",
            gap === 8 && "gap-8",
            gap === 10 && "gap-10",
            gap === 12 && "gap-12",
            gap === 16 && "gap-16",
            gap === 20 && "gap-20",
            gap === 24 && "gap-24",

            // Align
            align === "start" && "items-start",
            align === "center" && "items-center",
            align === "end" && "items-end",
            align === "stretch" && "items-stretch",
            align === "baseline" && "items-baseline",

            // Justify
            justify === "start" && "justify-start",
            justify === "center" && "justify-center",
            justify === "end" && "justify-end",
            justify === "between" && "justify-between",
            justify === "around" && "justify-around",
            justify === "evenly" && "justify-evenly",

            // Wrap
            wrap && "flex-wrap",

            className
        );

        return (
            <div ref={ref} className={styles} {...props}>
                {children}
            </div>
        );
    }
);

Stack.displayName = "Stack";
