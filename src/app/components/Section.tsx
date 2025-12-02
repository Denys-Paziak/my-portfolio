import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./ui/Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    containerSize?: "sm" | "md" | "lg" | "xl" | "full";
    spacing?: "sm" | "md" | "lg";
}

export function Section({ 
    children, 
    containerSize = "xl", 
    spacing = "md",
    className,
    ...props 
}: SectionProps) {
    const spacingClasses = {
        sm: "py-16 md:py-20",
        md: "py-20 md:py-24",
        lg: "py-24 md:py-32",
    };

    return (
        <section 
            className={cn(spacingClasses[spacing], className)} 
            {...props}
        >
            <Container size={containerSize}>
                {children}
            </Container>
        </section>
    );
}

