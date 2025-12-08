import { services } from "@/data/services";

import ServiceContent from "./ServiceContent";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    return <ServiceContent params={resolvedParams} />;
}
