import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function Badge({ children, className, color = "bg-white" }: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--glass-border)] w-fit", className)}>
      <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", color)} />
      <span className="text-xs font-medium text-white/60 tracking-wide uppercase">
        {children}
      </span>
    </div>
  );
}
