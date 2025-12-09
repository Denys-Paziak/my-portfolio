export function StructuredData() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Denys Paziak",
        jobTitle: "Backend Engineer & System Architect",
        description:
            "Backend Engineer & System Architect з експертизою в Python, Node.js, PostgreSQL, SaaS-архітектурах, AI-системах та хмарній інфраструктурі.",
        url: "https://denispazak.com",
        image: "https://denispazak.com/og-image.jpg",
        sameAs: [
            "https://github.com/denyspaziak",
            "https://linkedin.com/in/denyspaziak",
            "https://instagram.com/denyspaziak",
            "https://facebook.com/denyspaziak",
        ],
        knowsAbout: [
            "Backend Development",
            "System Architecture",
            "Python",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Docker",
            "Kubernetes",
            "AWS",
            "GCP",
            "Azure",
            "Microservices",
            "API Development",
            "DevOps",
            "CI/CD",
            "Cloud Infrastructure",
            "SaaS Architecture",
            "AI Systems",
        ],
        hasOccupation: {
            "@type": "Occupation",
            name: "Backend Engineer",
            occupationLocation: {
                "@type": "Country",
                name: "Ukraine",
            },
            skills: [
                "Python",
                "Node.js",
                "PostgreSQL",
                "System Architecture",
                "Cloud Computing",
                "Microservices",
            ],
        },
    };

    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Denys Paziak - Backend Development Services",
        description:
            "Professional backend development, system architecture, API design, and cloud infrastructure services. Specializing in scalable solutions with Python, Node.js, and modern cloud platforms.",
        provider: {
            "@type": "Person",
            name: "Denys Paziak",
        },
        areaServed: "Worldwide",
        serviceType: [
            "Backend Development",
            "System Architecture",
            "API Development",
            "Database Optimization",
            "Cloud Infrastructure",
            "DevOps Automation",
            "Microservices Architecture",
        ],
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
        },
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Denys Paziak Portfolio",
        url: "https://denispazak.com",
        description:
            "Backend Engineer & System Architect portfolio showcasing expertise in scalable architectures, Python, Node.js, and cloud infrastructure.",
        author: {
            "@type": "Person",
            name: "Denys Paziak",
        },
        inLanguage: "en-US",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
        </>
    );
}
