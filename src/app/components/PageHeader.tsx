import { SectionHeader } from "./ui/SectionHeader";
import { Container } from "./ui/Container";

interface PageHeaderProps {
    badgeText: string;
    title: string;
    subtitle?: string;
    description?: string;
    align?: "center" | "left";
}

export function PageHeader({
    badgeText,
    title,
    subtitle,
    description,
    align = "center",
}: PageHeaderProps) {
    return (
        <section className="pt-32 pb-20">
            <Container>
                <SectionHeader
                    badgeText={badgeText}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    align={align}
                />
            </Container>
        </section>
    );
}
