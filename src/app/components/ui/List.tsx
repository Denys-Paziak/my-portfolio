import * as React from "react";

import { cn } from "@/lib/utils";

const List = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
    ({ className, ...props }, ref) => (
        <ul ref={ref} className={cn("flex flex-col space-y-1", className)} {...props} />
    )
);
List.displayName = "List";

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
    icon?: React.ReactNode;
    action?: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
    ({ className, children, icon, action, ...props }, ref) => (
        <li
            ref={ref}
            className={cn(
                "group flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-white/5 border border-transparent hover:border-[var(--glass-border)]",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-3 overflow-hidden">
                {icon ? (
                    <div className="flex-shrink-0 text-muted-foreground group-hover:text-accent transition-colors">
                        {icon}
                    </div>
                ) : null}
                <div className="truncate text-sm text-foreground">{children}</div>
            </div>
            {action ? (
                <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {action}
                </div>
            ) : null}
        </li>
    )
);
ListItem.displayName = "ListItem";

export { List, ListItem };
