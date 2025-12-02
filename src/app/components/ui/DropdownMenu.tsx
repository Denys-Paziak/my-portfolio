"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownMenuProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: "start" | "end";
}

export function DropdownMenu({ trigger, children, align = "start" }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)}>
                {trigger}
            </div>

            {isOpen && (
                <div
                    className={cn(
                        "absolute z-50 mt-2 w-56 rounded-xl border border-[var(--glass-border)] bg-card/95 backdrop-blur-xl shadow-2xl animate-fade-in origin-top-right focus:outline-none",
                        align === "end" ? "right-0" : "left-0"
                    )}
                >
                    <div className="p-1" role="menu" aria-orientation="vertical">
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}

export function DropdownMenuItem({ children, className, onClick, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center w-full px-3 py-2 text-sm rounded-lg cursor-pointer transition-colors hover:bg-white/10 text-muted-foreground hover:text-foreground",
                className
            )}
            onClick={onClick}
            role="menuitem"
            {...props}
        >
            {children}
        </div>
    );
}

export function DropdownMenuSeparator() {
    return <div className="h-px bg-[var(--glass-border)] my-1" />;
}

export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
    return <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{children}</div>;
}
