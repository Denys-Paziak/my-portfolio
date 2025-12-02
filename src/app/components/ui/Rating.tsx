"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingProps {
    value: number;
    max?: number;
    onChange?: (value: number) => void;
    readOnly?: boolean;
    className?: string;
}

export function Rating({ value, max = 5, onChange, readOnly = false, className }: RatingProps) {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);

    return (
        <div className={cn("flex items-center gap-1", className)}>
            {Array.from({ length: max }).map((_, index) => {
                const starValue = index + 1;
                const isFilled = (hoverValue !== null ? hoverValue : value) >= starValue;

                return (
                    <button
                        key={index}
                        type="button"
                        disabled={readOnly}
                        onClick={() => onChange?.(starValue)}
                        onMouseEnter={() => !readOnly && setHoverValue(starValue)}
                        onMouseLeave={() => !readOnly && setHoverValue(null)}
                        className={cn(
                            "transition-colors focus:outline-none",
                            readOnly
                                ? "cursor-default"
                                : "cursor-pointer hover:scale-110 transition-transform"
                        )}
                    >
                        <Star
                            className={cn(
                                "w-5 h-5 transition-all",
                                isFilled
                                    ? "fill-accent text-accent"
                                    : "fill-transparent text-muted-foreground/30"
                            )}
                        />
                    </button>
                );
            })}
        </div>
    );
}
