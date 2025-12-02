import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    href?: string;
    target?: string;
    rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const styles = cn(
            "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out group",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "disabled:opacity-50 disabled:pointer-events-none",
            "active:scale-[0.95]",

            // Size variants
            size === "sm" && "px-5 py-2.5 text-xs gap-2 [&_svg]:w-4 [&_svg]:h-4",
            size === "md" && "px-5 py-2.5 text-sm gap-2 [&_svg]:w-5 [&_svg]:h-5",
            size === "lg" && "px-6 py-3 text-base gap-2.5 [&_svg]:w-6 [&_svg]:h-6",
            size === "icon" && "h-10 w-10 p-0 [&_svg]:w-4 [&_svg]:h-4",

            // Style variants
            variant === "primary" && [
                "bg-white text-black font-bold tracking-wide",
                "hover:bg-[var(--accent)] hover:shadow-[0_0_20px_rgba(153,255,51,0.3)]",
                // Icon Animation
                "[&_svg]:transition-transform [&_svg]:duration-300",
                "hover:[&_svg]:translate-x-1",
            ],
            variant === "secondary" && [
                "bg-white/[0.03] text-muted-foreground border border-white/[0.08]",
                "hover:text-foreground hover:border-white/[0.2] hover:bg-white/[0.08]",
                "hover:scale-[1.01]",
            ],
            variant === "ghost" && [
                "bg-transparent text-muted-foreground",
                "hover:text-foreground hover:bg-white/[0.05]",
            ],
            className
        );

        if (href) {
            return (
                <Link href={href} className={styles} target={props.target} rel={props.rel}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={styles} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
