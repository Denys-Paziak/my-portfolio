"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, checked, onCheckedChange, disabled, ...props }, ref) => {
        const [isChecked, setIsChecked] = React.useState(checked || false);

        React.useEffect(() => {
            if (checked !== undefined) {
                setIsChecked(checked as boolean);
            }
        }, [checked]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newChecked = e.target.checked;
            setIsChecked(newChecked);
            onCheckedChange?.(newChecked);
        };

        return (
            <label
                className={cn(
                    "relative flex items-center justify-center w-5 h-5 rounded border border-[var(--glass-border)] bg-white/5 cursor-pointer transition-all hover:bg-white/10 focus-within:ring-2 focus-within:ring-accent/50",
                    isChecked && "bg-accent border-accent text-accent-foreground",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={handleChange}
                    disabled={disabled}
                    ref={ref}
                    {...props}
                />
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
            </label>
        );
    }
);
Checkbox.displayName = "Checkbox";
