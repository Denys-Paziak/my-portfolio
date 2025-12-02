export interface Article {
    id: string;
    title: string;
    category: string;
    tags: string[];
    date: string;
    publishedDate: string; // ISO format for structured data
    updatedDate?: string; // ISO format
    readTime: string;
    slug: string;
    description: string;
    excerpt: string; // Short summary for cards
    color: string;
    accent: string;
    authorId: string;
    featured?: boolean;
    seo?: {
        keywords?: string[];
        ogImage?: string;
    };
}

export const articles: Article[] = [
    {
        id: "01",
        title: "The Future of Headless Commerce",
        category: "Web Development",
        tags: ["E-commerce", "Architecture", "API", "Next.js"],
        date: "Oct 24, 2023",
        publishedDate: "2023-10-24T10:00:00Z",
        readTime: "5 min",
        slug: "future-of-headless-commerce",
        description: "Exploring the shift towards decoupled frontend and backend systems for scalable e-commerce.",
        excerpt: "Learn how headless commerce architecture enables omnichannel experiences and faster time-to-market.",
        color: "from-purple-500/20 to-blue-500/20",
        accent: "text-purple-500",
        authorId: "denis-pazak",
        featured: true,
        seo: {
            keywords: ["headless commerce", "e-commerce architecture", "API-first", "decoupled systems"],
        }
    },
    {
        id: "02",
        title: "Optimizing WebGL for Mobile Devices",
        category: "Performance",
        tags: ["WebGL", "Performance", "Mobile", "3D Graphics"],
        date: "Nov 12, 2023",
        publishedDate: "2023-11-12T14:30:00Z",
        readTime: "8 min",
        slug: "optimizing-webgl-mobile",
        description: "Techniques and best practices for rendering complex 3D graphics on resource-constrained devices.",
        excerpt: "Master WebGL optimization techniques to deliver smooth 3D experiences on mobile devices.",
        color: "from-emerald-500/20 to-cyan-500/20",
        accent: "text-emerald-500",
        authorId: "denis-pazak",
        seo: {
            keywords: ["WebGL optimization", "mobile 3D graphics", "performance tuning", "GPU rendering"],
        }
    },
    {
        id: "03",
        title: "Building Scalable AI Agents",
        category: "AI / ML",
        tags: ["AI", "Machine Learning", "Agents", "Python", "LangChain"],
        date: "Dec 05, 2023",
        publishedDate: "2023-12-05T09:15:00Z",
        updatedDate: "2024-01-10T12:00:00Z",
        readTime: "6 min",
        slug: "building-scalable-ai-agents",
        description: "Designing autonomous agents that can handle complex workflows and large-scale data processing.",
        excerpt: "Build intelligent AI agents that scale from prototype to production with modern frameworks.",
        color: "from-orange-500/20 to-red-500/20",
        accent: "text-orange-500",
        authorId: "denis-pazak",
        featured: true,
        seo: {
            keywords: ["AI agents", "LangChain", "autonomous systems", "machine learning", "scalability"],
        }
    },
    {
        id: "04",
        title: "Micro-Interactions & User Retention",
        category: "Design",
        tags: ["UX Design", "Animation", "User Experience", "Framer Motion"],
        date: "Jan 15, 2024",
        publishedDate: "2024-01-15T16:45:00Z",
        readTime: "4 min",
        slug: "micro-interactions-user-retention",
        description: "How subtle animations and feedback loops significantly improve user engagement and retention.",
        excerpt: "Discover how micro-interactions create delightful experiences that keep users coming back.",
        color: "from-pink-500/20 to-rose-500/20",
        accent: "text-pink-500",
        authorId: "denis-pazak",
        seo: {
            keywords: ["micro-interactions", "UX design", "user retention", "animation", "engagement"],
        }
    },
];

// Helper function to get unique categories
export const getAllCategories = (): string[] => {
    return Array.from(new Set(articles.map(article => article.category)));
};

// Helper function to get unique tags
export const getAllTags = (): string[] => {
    return Array.from(new Set(articles.flatMap(article => article.tags)));
};

// Helper function to get articles by category
export const getArticlesByCategory = (category: string): Article[] => {
    return articles.filter(article => article.category === category);
};

// Helper function to get articles by tag
export const getArticlesByTag = (tag: string): Article[] => {
    return articles.filter(article => article.tags.includes(tag));
};

// Helper function to get featured articles
export const getFeaturedArticles = (): Article[] => {
    return articles.filter(article => article.featured);
};
