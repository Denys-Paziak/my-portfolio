"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Zap, Shield, Globe, Smartphone, Database, Bot, Cpu, Palette, Layers, Code2, Terminal, Lock, Server, Rocket } from "lucide-react";
import Link from "next/link";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { BentoCard } from "../../components/ui/BentoCard";
import { TextReveal } from "../../components/ui/TextReveal";
import { ScrollReveal } from "../../components/ui/ScrollReveal";
import { Accordion, AccordionItem } from "../../components/ui/Accordion";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Footer } from "../../components/Footer";
import { CTA } from "../../components/CTA";
import { Separator } from "../../components/ui/Separator";

export default function ServiceContent({ params }: { params: { slug: string } }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Expanded Mock Data for Premium Landing Page
    const serviceData = {
        "web-development": {
            title: "Web Development",
            heroTitle: "Scalable Digital Ecosystems",
            subtitle: "Beyond simple websites. We engineer high-performance web platforms that drive business growth.",
            icon: <Globe className="w-full h-full" />,
            metrics: [
                { label: "Lighthouse Score", value: "100" },
                { label: "Global Uptime", value: "99.99%" },
                { label: "Avg. Latency", value: "<50ms" }
            ],
            painPoints: [
                "Slow load times killing conversion rates",
                "Spaghetti code that makes updates impossible",
                "Security vulnerabilities putting data at risk",
                "Poor SEO performance invisible to Google"
            ],
            gainPoints: [
                "Blazing fast performance (Core Web Vitals)",
                "Modular architecture for rapid scaling",
                "Enterprise-grade security standards",
                "Technical SEO baked into the core"
            ],
            capabilities: [
                { title: "Server-Side Rendering", desc: "Instant initial load and perfect SEO with Next.js SSR.", icon: <Server className="w-6 h-6" />, colSpan: "md:col-span-2" },
                { title: "Edge Computing", desc: "Logic running closer to your users for zero latency.", icon: <Zap className="w-6 h-6" />, colSpan: "md:col-span-1" },
                { title: "Headless CMS", desc: "Empower marketing teams without breaking code.", icon: <Database className="w-6 h-6" />, colSpan: "md:col-span-1" },
                { title: "Real-time Sockets", desc: "Live updates for chat, notifications, and data.", icon: <Zap className="w-6 h-6" />, colSpan: "md:col-span-2" },
                { title: "Type Safety", desc: "End-to-end TypeScript for bug-free deployments.", icon: <Shield className="w-6 h-6" />, colSpan: "md:col-span-1" },
                { title: "Automated Testing", desc: "CI/CD pipelines with Jest and Cypress.", icon: <Terminal className="w-6 h-6" />, colSpan: "md:col-span-2" }
            ],
            stack: [
                { name: "Next.js 14", category: "Framework" },
                { name: "React 19", category: "Library" },
                { name: "TypeScript", category: "Language" },
                { name: "Tailwind CSS", category: "Styling" },
                { name: "Supabase", category: "Backend" },
                { name: "Vercel", category: "Infrastructure" }
            ],
            process: [
                { title: "Discovery & Strategy", desc: "We analyze your business goals, audit existing systems, and define the technical roadmap.", deliverable: "Technical Specification Doc" },
                { title: "UX/UI Design", desc: "Creating high-fidelity prototypes and design systems that ensure consistency.", deliverable: "Figma Design System" },
                { title: "Agile Development", desc: "Iterative sprints with bi-weekly demos. You see the product evolve in real-time.", deliverable: "Production-Ready Code" },
                { title: "QA & Launch", desc: "Rigorous testing across devices, security audits, and a zero-downtime deployment.", deliverable: "Live Application" }
            ],
            faq: [
                { q: "How do you handle performance optimization?", a: "We use a combination of server-side rendering, image optimization, code splitting, and edge caching to ensure sub-second load times." },
                { q: "Can you migrate our legacy app?", a: "Yes, we specialize in incremental migration strategies (Strangler Fig pattern) to modernize legacy systems without downtime." },
                { q: "Do you provide post-launch support?", a: "Absolutely. We offer SLA-backed support packages including 24/7 monitoring, security patches, and feature updates." }
            ]
        },
        // Fallback for other services (simplified for brevity in this artifact, but would be fully populated in prod)
        "default": {
            title: "Service Detail",
            heroTitle: "Engineering Excellence",
            subtitle: "Detailed information about this service is being prepared. Contact us for a custom proposal.",
            icon: <Layers className="w-full h-full" />,
            metrics: [
                { label: "Quality", value: "A+" },
                { label: "Support", value: "24/7" },
                { label: "Satisfaction", value: "100%" }
            ],
            painPoints: ["Unclear requirements", "Missed deadlines", "Buggy software"],
            gainPoints: ["Crystal clear roadmap", "On-time delivery", "Robust engineering"],
            capabilities: [
                { title: "Strategic Planning", desc: "Roadmapping your success.", icon: <Globe className="w-6 h-6" />, colSpan: "md:col-span-3" }
            ],
            stack: [{ name: "Modern Tech", category: "Stack" }],
            process: [{ title: "Consultation", desc: "Understanding needs.", deliverable: "Proposal" }],
            faq: [{ q: "Contact us?", a: "Please reach out via the form below." }]
        }
    };

    const service = serviceData[params.slug as keyof typeof serviceData] || serviceData["default"];

    return (
        <main className="min-h-screen bg-background">

            {/* 1. Cinematic Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

                <Container>
                    <Link href="/services" className="inline-block mb-8 group relative z-10">
                        <Button variant="ghost" size="sm" className="text-white/60 hover:text-white pl-0">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Button>
                    </Link>

                    <div className="relative z-10 max-w-5xl">
                        <Badge className="mb-8 border-accent/20 text-accent bg-accent/5">{service.title}</Badge>
                        <Heading level={1} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            <TextReveal text={service.heroTitle} />
                        </Heading>
                        <Text size="lg" variant="muted" className="text-xl md:text-2xl leading-relaxed max-w-2xl mb-12">
                            {service.subtitle}
                        </Text>

                        {/* Metrics Strip */}
                        <div className="grid grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-8 max-w-3xl">
                            {service.metrics.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                                    <div className="text-xs md:text-sm font-mono text-white/40 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* 2. Pain vs Gain Visualization */}
            <section className="py-32 border-y border-white/5 bg-white/[0.02]">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* The Old Way */}
                        <div className="space-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                    <XCircle className="w-6 h-6" />
                                </div>
                                <Heading level={3} className="text-3xl font-bold text-white/80">The Old Way</Heading>
                            </div>
                            <ul className="space-y-6">
                                {service.painPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-2.5" />
                                        <Text variant="muted" className="text-lg">{point}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Way */}
                        <div className="space-y-8 relative">
                            <div className="absolute -inset-8 bg-accent/5 blur-3xl rounded-full opacity-20 pointer-events-none" />
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <Heading level={3} className="text-3xl font-bold text-white">The Radical Way</Heading>
                            </div>
                            <ul className="space-y-6 relative z-10">
                                {service.gainPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shadow-[0_0_10px_rgba(109,214,32,0.5)]" />
                                        <Text className="text-lg text-white">{point}</Text>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Deep Capabilities Grid */}
            <section className="py-32">
                <Container>
                    <SectionHeader
                        align="left"
                        badgeText="Capabilities"
                        title="Technical"
                        subtitle="Arsenal"
                        description="We don't just write code. We deploy comprehensive technical strategies."
                        className="mb-20"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
                        {service.capabilities.map((cap, i) => (
                            <BentoCard key={i} className={`${cap.colSpan} flex flex-col justify-between group`}>
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors duration-300">
                                    {cap.icon}
                                </div>
                                <div>
                                    <Heading level={4} className="text-xl font-bold mb-3">{cap.title}</Heading>
                                    <Text variant="muted" className="leading-relaxed">{cap.desc}</Text>
                                </div>
                            </BentoCard>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 4. Technical Architecture (Stack) */}
            <section className="py-32 border-t border-white/5">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Heading level={2} className="text-4xl font-bold mb-6">Powered by Modern Tech</Heading>
                        <Text variant="muted" className="text-lg">Our stack is chosen for performance, scalability, and developer experience.</Text>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {service.stack.map((tech, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center hover:border-white/10 transition-colors group">
                                <div className="text-white font-bold mb-1 group-hover:text-accent transition-colors">{tech.name}</div>
                                <div className="text-xs text-white/40 font-mono">{tech.category}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 5. Process Timeline */}
            <section ref={containerRef} className="py-32 bg-white/[0.02] border-y border-white/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 sticky top-32 h-fit">
                            <SectionHeader
                                align="left"
                                badgeText="Workflow"
                                title="The"
                                subtitle="Process"
                                description="From chaos to clarity. A structured path to production."
                            />
                        </div>
                        <div className="lg:col-span-8 space-y-24 relative before:absolute before:left-0 before:top-4 before:bottom-4 before:w-px before:bg-white/10 pl-12">
                            {service.process.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[53px] top-2 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_10px_rgba(109,214,32,0.3)]" />
                                    <Text variant="mono" size="xs" className="text-accent mb-4 block">/ PHASE 0{i + 1}</Text>
                                    <Heading level={3} className="text-3xl font-bold mb-4">{step.title}</Heading>
                                    <div className="text-xl leading-relaxed text-muted-foreground mb-8">
                                        <ScrollReveal
                                            text={step.desc}
                                            progress={scrollYProgress}
                                            range={[0.1 + (i * 0.15), 0.3 + (i * 0.15)]}
                                        />
                                    </div>
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                                        <CheckCircle2 className="w-4 h-4 text-accent" />
                                        <span className="text-sm font-mono text-white/80">Deliverable: <span className="text-white">{step.deliverable}</span></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* 6. FAQ */}
            <section className="py-32">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Heading level={2} className="text-4xl font-bold mb-16 text-center">Common Questions</Heading>
                        <Accordion type="single" className="w-full">
                            {service.faq.map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`item-${i}`}
                                    trigger={item.q}
                                    index={i}
                                >
                                    {item.a}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Container>
            </section>

            {/* 7. CTA */}
            <CTA />
            <Footer />
        </main>
    );
}
