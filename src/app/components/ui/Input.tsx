import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, error, icon, ...props }, ref) => {
        return (
            <div className="relative w-full">
                {icon ? (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
                        {icon}
                    </div>
                ) : null}
                <input
                    type={type}
                    className={cn(
                        "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-base md:text-sm text-foreground placeholder:text-muted-foreground/50 transition-all",
                        "hover:bg-white/10 hover:border-white/20",
                        "focus:outline-none focus:bg-white/10 focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        icon && "pl-10",
                        error &&
                            "border-red-500 focus:border-red-500 text-red-500 placeholder:text-red-500/50",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
