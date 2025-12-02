import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Text } from "./Text";
import { Heading } from "./Heading";

interface SectionHeaderProps {
    badgeText: string;
    title: React.ReactNode;
    subtitle?: string;
    description?: React.ReactNode;
    align?: "center" | "left";
    className?: string;
}

export function SectionHeader({
    badgeText,
    title,
    subtitle,
    description,
    align = "center",
    className,
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col",
                align === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            <Badge className="mb-4">{badgeText}</Badge>
            <Heading
                level={2}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-normal mb-4"
            >
                {title}
                {subtitle && <span className="text-accent ml-3">{subtitle}</span>}
            </Heading>
            {description && (
                <Text size="lg" variant="muted" className="max-w-2xl mx-auto leading-relaxed">
                    {description}
                </Text>
            )}
        </div>
    );
}
