"use client";

import { useScroll } from "framer-motion";
import { ArrowRight, Bot, Cpu, Database, Globe, Palette, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Badge } from "../components/ui/Badge";
import { BentoCard } from "../components/ui/BentoCard";
import { Container } from "../components/ui/Container";
import { Heading } from "../components/ui/Heading";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Separator } from "../components/ui/Separator";
import { Text } from "../components/ui/Text";
import { TextReveal } from "../components/ui/TextReveal";

export default function ServicesContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const services = [
        {
            slug: "web-development",
            title: "Web Development",
            desc: "High-performance, scalable web applications built with Next.js and React.",
            icon: <Globe className="w-6 h-6" />,
            tags: ["Next.js", "React", "TypeScript"],
            color: "text-blue-400",
            bg: "bg-blue-500/5",
            border: "text-blue-200/60",
            colSpan: "md:col-span-2 md:row-span-2",
            visual: "bg-gradient-to-br from-blue-500/10 to-transparent",
        },
        {
            slug: "mobile-development",
            title: "Mobile Development",
            desc: "Native-quality iOS and Android apps using React Native.",
            icon: <Smartphone className="w-6 h-6" />,
            tags: ["React Native", "iOS", "Android"],
            color: "text-emerald-400",
            bg: "bg-emerald-500/5",
            border: "text-emerald-200/60",
            colSpan: "md:col-span-1 md:row-span-2",
            visual: "bg-gradient-to-b from-emerald-500/10 to-transparent",
        },
        {
            slug: "backend-architecture",
            title: "Backend Architecture",
            desc: "Robust APIs and microservices designed for scale.",
            icon: <Database className="w-6 h-6" />,
            tags: ["Python", "Node.js", "PostgreSQL"],
            color: "text-orange-400",
            bg: "bg-orange-500/5",
            border: "text-orange-200/60",
            colSpan: "md:col-span-1 md:row-span-1",
            visual: "bg-gradient-to-br from-orange-500/10 to-transparent",
        },
        {
            slug: "ai-solutions",
            title: "AI Solutions",
            desc: "Integrating LLMs and custom agents into your workflow.",
            icon: <Bot className="w-6 h-6" />,
            tags: ["LLMs", "RAG", "Agents"],
            color: "text-purple-400",
            bg: "bg-purple-500/5",
            border: "text-purple-200/60",
            colSpan: "md:col-span-2 md:row-span-1",
            visual: "bg-gradient-to-r from-purple-500/10 to-transparent",
        },
        {
            slug: "devops-cloud",
            title: "DevOps & Cloud",
            desc: "Automated CI/CD and secure cloud infrastructure.",
            icon: <Cpu className="w-6 h-6" />,
            tags: ["AWS", "Docker", "Kubernetes"],
            color: "text-cyan-400",
            bg: "bg-cyan-500/5",
            border: "text-cyan-200/60",
            colSpan: "md:col-span-2 md:row-span-1",
            visual: "bg-gradient-to-l from-cyan-500/10 to-transparent",
        },
        {
            slug: "ui-ux-design",
            title: "UI/UX Design",
            desc: "User-centric design systems and interactive prototypes.",
            icon: <Palette className="w-6 h-6" />,
            tags: ["Figma", "Prototyping", "Systems"],
            color: "text-pink-400",
            bg: "bg-pink-500/5",
            border: "text-pink-200/60",
            colSpan: "md:col-span-1 md:row-span-1",
            visual: "bg-gradient-to-br from-pink-500/10 to-transparent",
        },
    ];

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="pt-40 pb-20">
                <Container>
                    <div className="max-w-5xl">
                        <Badge className="mb-8">Services</Badge>
                        <Heading
                            level={1}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]"
                        >
                            <TextReveal text="Engineering Digital Excellence" />
                        </Heading>
                        <Text
                            size="lg"
                            variant="muted"
                            className="max-w-2xl text-xl leading-relaxed"
                        >
                            I build the engines that power modern digital businesses. From
                            high-frequency trading platforms to immersive 3D experiences.
                        </Text>
                    </div>
                </Container>
            </section>

            <Separator className="opacity-10" />

            {/* Bento Grid Services */}
            <section className="py-24">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={service.colSpan}
                            >
                                <BentoCard className="h-full flex flex-col justify-between group cursor-pointer">
                                    <div
                                        className={`absolute inset-0 ${service.visual} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10">
                                        <div
                                            className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}
                                        >
                                            {service.icon}
                                        </div>
                                        <div className="flex items-center justify-between mb-4">
                                            <Heading level={3} className="text-2xl font-bold">
                                                {service.title}
                                            </Heading>
                                            <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
                                        </div>
                                        <Text variant="muted" className="mb-6 line-clamp-3">
                                            {service.desc}
                                        </Text>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    className={`bg-white/5 border-white/5 ${service.border}`}
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </BentoCard>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Process Section with ScrollReveal */}
            <section ref={containerRef} className="py-32 border-t border-white/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="sticky top-32">
                            <SectionHeader
                                align="left"
                                badgeText="Workflow"
                                title="The"
                                subtitle="Process"
                                description="A rigorous path to production."
                            />
                        </div>
                        <div className="space-y-24">
                            {[
                                {
                                    title: "Discovery",
                                    desc: "We dig deep into your requirements, challenging assumptions to find the core problem.",
                                },
                                {
                                    title: "Architecture",
                                    desc: "Designing a system that scales. No shortcuts, just solid engineering principles.",
                                },
                                {
                                    title: "Development",
                                    desc: "Iterative sprints with constant feedback loops. You see progress every week.",
                                },
                                {
                                    title: "Launch",
                                    desc: "Seamless deployment with zero downtime strategies and comprehensive monitoring.",
                                },
                            ].map((step, i) => (
                                <div key={i}>
                                    <Text
                                        variant="mono"
                                        size="xs"
                                        className="text-accent mb-4 block"
                                    >
                                        / 0{i + 1}
                                    </Text>
                                    <Heading level={2} className="text-4xl font-bold mb-6">
                                        {step.title}
                                    </Heading>
                                    <div className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                                        <ScrollReveal
                                            text={step.desc}
                                            progress={scrollYProgress}
                                            range={[0.1 + i * 0.15, 0.3 + i * 0.15]}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <CTA />

            <Footer />
        </main>
    );
}
