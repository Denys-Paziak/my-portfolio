import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className={cn(
                "text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2 block group-focus-within:text-white transition-colors",
                className
            )}
            {...props}
        />
    )
);
Label.displayName = "Label";

export { Label };
