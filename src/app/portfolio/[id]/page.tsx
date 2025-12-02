import { projects } from "@/data/projects";
import ProjectContent from "./ProjectContent";
import type { Metadata } from "next";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
    const project = projects.find((p) => p.id === params.id);

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

export default function ProjectPage({ params }: { params: { id: string } }) {
    return <ProjectContent params={params} />;
}
