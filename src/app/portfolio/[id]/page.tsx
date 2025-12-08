import type { Metadata } from "next";

import { projects } from "@/data/projects";

import ProjectContent from "./ProjectContent";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} - Portfolio`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
        },
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    return <ProjectContent params={resolvedParams} />;
}
