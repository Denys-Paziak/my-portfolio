import * as React from "react";
import { cn } from "@/lib/utils";
import { FolderOpen } from "lucide-react";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ElementType;
    title: string;
    description?: string;
    action?: React.ReactNode;
}

export function EmptyState({ icon: Icon = FolderOpen, title, description, action, className, ...props }: EmptyStateProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center p-12 text-center border border-dashed border-[var(--glass-border)] rounded-2xl bg-white/[0.02]",
                className
            )}
            {...props}
        >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-6">
                <Icon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">{title}</h3>
            {description && (
                <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>
            )}
            {action}
        </div>
    );
}
