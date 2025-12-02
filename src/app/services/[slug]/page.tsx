import { services } from "@/data/services";
import ServiceContent from "./ServiceContent";

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    return <ServiceContent params={params} />;
}
