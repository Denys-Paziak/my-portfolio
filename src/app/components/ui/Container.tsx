import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = "xl", children, ...props }, ref) => {
        const styles = cn(
            "mx-auto px-6 w-full",

            // Size variants
            size === "sm" && "max-w-3xl",
            size === "md" && "max-w-5xl",
            size === "lg" && "max-w-6xl",
            size === "xl" && "max-w-7xl",
            size === "full" && "max-w-full",

            className
        );

        return (
            <div ref={ref} className={styles} {...props}>
                {children}
            </div>
        );
    }
);

Container.displayName = "Container";
