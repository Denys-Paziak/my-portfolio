export interface Project {
    id: string;
    title: string;
    subtitle?: string;
    category: string;
    description: string;
    tech: string[];
    image?: string;
    slug: string;
    color: string;
    icon: string;
}

export const projects: Project[] = [
    {
        id: "01",
        title: "E-Commerce Core",
        subtitle: "Headless Architecture",
        category: "E-Commerce",
        description:
            "High-performance headless shopify backend with Redis caching and elastic search.",
        tech: ["Python", "FastAPI", "Redis", "Docker"],
        slug: "e-commerce-core",
        color: "bg-purple-500",
        icon: "Globe",
    },
    {
        id: "02",
        title: "FinTech Dashboard",
        subtitle: "Real-time Analytics",
        category: "FinTech",
        description:
            "Real-time analytics and reporting engine processing millions of transactions.",
        tech: ["Next.js", "D3.js", "Postgres", "AWS"],
        slug: "fintech-dashboard",
        color: "bg-emerald-500",
        icon: "Zap",
    },
    {
        id: "03",
        title: "AI Chat Bot",
        subtitle: "Context-Aware Agent",
        category: "AI",
        description: "Context-aware customer support agent using RAG and vector databases.",
        tech: ["OpenAI", "LangChain", "Python", "Pinecone"],
        slug: "ai-chatbot",
        color: "bg-blue-500",
        icon: "Cpu",
    },
    {
        id: "04",
        title: "Cloud Infra",
        subtitle: "Scalable Systems",
        category: "DevOps",
        description: "Terraform modules for AWS scaling, load balancing, and security compliance.",
        tech: ["Terraform", "AWS", "Docker", "K8s"],
        slug: "cloud-infra",
        color: "bg-orange-500",
        icon: "Code2",
    },
];
