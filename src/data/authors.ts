export interface Author {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar?: string;
    email: string;
    social: {
        twitter?: string;
        linkedin?: string;
        github?: string;
        website?: string;
    };
    expertise: string[];
}

export const authors: Record<string, Author> = {
    "denis-pazak": {
        id: "denis-pazak",
        name: "Denis Pazak",
        role: "Senior Software Engineer",
        bio: "Full-stack developer specializing in scalable web applications, AI integration, and modern frontend frameworks. 5+ years of experience building production-ready solutions.",
        email: "hello@denispazak.com",
        social: {
            twitter: "https://twitter.com/denispazak",
            linkedin: "https://linkedin.com/in/denispazak",
            github: "https://github.com/denispazak",
            website: "https://denispazak.com"
        },
        expertise: [
            "Web Development",
            "React & Next.js",
            "Python & FastAPI",
            "System Architecture",
            "AI/ML Integration"
        ]
    }
};
