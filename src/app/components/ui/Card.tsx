import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card transition-all duration-300",
                "hover:-translate-y-1 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5",
                className
            )}
            {...props}
        >
            {/* Top highlight border on hover */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {children}
        </div>
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
            {...props}
        />
    );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    );
}

export function CardImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
            <img
                src={src}
                alt={alt}
                className={cn("object-cover w-full h-full transition-transform duration-500 group-hover:scale-105", className)}
                {...props}
            />
        </div>
    );
}
