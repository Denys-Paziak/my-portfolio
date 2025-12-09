import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export function Expertise() {
    return (
        <section className="relative w-full bg-background py-16 md:py-20 border-t border-[var(--glass-border)]">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12 text-center">
                    <Heading level={2} className="text-3xl md:text-4xl font-bold mb-4">
                        About Me & Expertise
                    </Heading>
                    <div className="w-20 h-1 bg-accent mx-auto" />
                </div>

                {/* Content */}
                <div className="space-y-6 text-white/80 leading-relaxed">
                    <Text size="lg" className="text-white/90">
                        I&apos;m <strong className="text-white">Denys Paziak</strong>, a Backend Engineer and System Architect specializing in building scalable, high-performance digital infrastructure. With deep expertise in Python, Node.js, and cloud technologies, I transform complex business challenges into elegant, efficient solutions.
                    </Text>

                    <Text size="base">
                        My unique value lies in combining technical excellence with strategic thinking. I don&apos;t just write code—I architect systems that scale, perform under pressure, and evolve with your business needs. From microservices architecture to real-time data processing, I deliver solutions that drive measurable results.
                    </Text>

                    <Text size="base">
                        <strong className="text-white">Core Services:</strong> I specialize in backend development, API design, database optimization, cloud infrastructure (AWS, GCP, Azure), DevOps automation, and system architecture. Whether you need to build a new platform from scratch or optimize existing infrastructure, I bring the expertise to make it happen.
                    </Text>

                    <Text size="base">
                        <strong className="text-white">Technology Stack:</strong> Python (Django, FastAPI, Flask), Node.js (Express, NestJS), PostgreSQL, MongoDB, Redis, Docker, Kubernetes, CI/CD pipelines, microservices, RESTful APIs, GraphQL, message queues (RabbitMQ, Kafka), and modern cloud platforms. I stay current with emerging technologies while maintaining focus on proven, production-ready solutions.
                    </Text>

                    <Text size="base">
                        Every project is an opportunity to push boundaries and deliver exceptional value. Let&apos;s build something remarkable together.
                    </Text>
                </div>
            </div>
        </section>
    );
}
