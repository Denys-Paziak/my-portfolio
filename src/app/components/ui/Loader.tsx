import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}

export function Spinner({ size = "md", className, ...props }: SpinnerProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
    };

    return (
        <div className={cn("flex items-center justify-center", className)} {...props}>
            <Loader2 className={cn("animate-spin text-accent", sizeClasses[size])} />
        </div>
    );
}

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
}

export function ProgressBar({ value, max = 100, className, ...props }: ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div
            className={cn("h-2 w-full overflow-hidden rounded-full bg-white/10", className)}
            {...props}
        >
            <div
                className="h-full bg-accent transition-all duration-500 ease-in-out"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
