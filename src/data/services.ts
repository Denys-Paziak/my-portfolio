export interface Service {
    id: string;
    title: string;
    description: string;
    tags: string[];
    slug: string;
    color: string;
    border: string;
    colSpan: string;
}

export const services: Service[] = [
    {
        id: "01",
        title: "Web Platforms",
        description:
            "High-performance applications built with Next.js and React. Focus on speed, SEO, and fluid user interactions.",
        tags: ["Next.js", "React", "WebGL"],
        slug: "web-platforms",
        color: "from-purple-500/20 to-blue-500/20",
        border: "group-hover:border-purple-500/50",
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        id: "02",
        title: "Artificial Intelligence",
        description:
            "Integrating LLMs and custom agents to automate complex workflows. RAG pipelines and intelligent chatbots.",
        tags: ["LLMs", "LangChain", "RAG"],
        slug: "artificial-intelligence",
        color: "from-blue-500/20 to-cyan-500/20",
        border: "group-hover:border-blue-500/50",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        id: "03",
        title: "Mobile Solutions",
        description:
            "Native and cross-platform mobile apps. Focusing on performance, animation, and native device capabilities.",
        tags: ["React Native", "iOS", "Android"],
        slug: "mobile-solutions",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "group-hover:border-emerald-500/50",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
];
