"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: string;
    size?: "sm" | "md" | "lg";
}

export function Avatar({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) {
    const [hasError, setHasError] = React.useState(false);

    const sizeClasses = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-16 h-16 text-lg",
    };

    return (
        <div
            className={cn(
                "relative rounded-full overflow-hidden bg-white/5 border border-[var(--glass-border)] flex items-center justify-center shrink-0",
                sizeClasses[size],
                className
            )}
            {...props}
        >
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={() => setHasError(true)}
                />
            ) : (
                <span className="font-mono font-medium text-muted-foreground">
                    {fallback || "?"}
                </span>
            )}
        </div>
    );
}

export function AvatarGroup({
    children,
    className,
    limit = 3,
}: {
    children: React.ReactNode;
    className?: string;
    limit?: number;
}) {
    const childrenArray = React.Children.toArray(children);
    const visibleChildren = childrenArray.slice(0, limit);
    const remaining = childrenArray.length - limit;

    return (
        <div className={cn("flex items-center -space-x-3", className)}>
            {visibleChildren.map((child, index) => (
                <div
                    key={index}
                    className="relative z-10 ring-2 ring-background rounded-full transition-transform hover:z-20 hover:scale-110"
                >
                    {child}
                </div>
            ))}
            {remaining > 0 && (
                <div className="relative z-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-[var(--glass-border)] ring-2 ring-background text-xs font-medium text-muted-foreground">
                    +{remaining}
                </div>
            )}
        </div>
    );
}
