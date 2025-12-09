import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground/50 transition-all resize-none",
                    "hover:bg-white/10 hover:border-white/20",
                    "focus:outline-none focus:bg-white/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
