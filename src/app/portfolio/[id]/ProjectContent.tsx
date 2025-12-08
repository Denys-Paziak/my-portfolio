"use client";

import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Code2,
    Cpu,
    ExternalLink,
    Github,
    Shield,
    Smartphone,
    Zap,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/Button";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";

export default function ProjectContent({ params: _params }: { params: { id: string } }) {
    // Mock Data
    const project = {
        title: "Neon Finance Dashboard",
        category: "FinTech",
        year: "2023",
        role: "Lead Frontend Engineer",
        description:
            "A high-performance, real-time trading dashboard for a next-gen crypto exchange.",
        liveLink: "#",
        githubLink: "#",
        challenge:
            "The client needed a dashboard that could handle thousands of real-time data points per second without lagging, while maintaining a premium, futuristic aesthetic. The existing solution was sluggish and difficult to scale.",
        solution:
            "We utilized Next.js for server-side rendering and WebSockets for real-time data. Framer Motion was used for smooth transitions, and a custom WebGL layer was implemented for the complex charting requirements. The result is a buttery-smooth experience that keeps traders ahead of the market.",
        stack: ["React", "Next.js", "TypeScript", "D3.js", "WebSockets", "Tailwind CSS"],
        stats: [
            { label: "Latency", value: "< 50ms" },
            { label: "Daily Users", value: "50k+" },
            { label: "Uptime", value: "99.99%" },
            { label: "Trades/Sec", value: "2000+" },
        ],
        features: [
            {
                icon: <Zap className="w-6 h-6" />,
                title: "Real-time Engine",
                desc: "WebSocket integration for sub-millisecond data updates.",
            },
            {
                icon: <Cpu className="w-6 h-6" />,
                title: "WebGL Charting",
                desc: "Custom GPU-accelerated charts for rendering millions of points.",
            },
            {
                icon: <Shield className="w-6 h-6" />,
                title: "Institutional Security",
                desc: "Bank-grade encryption and authentication protocols.",
            },
            {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile First",
                desc: "Fully responsive design that works perfectly on any device.",
            },
        ],
        images: [
            "bg-gradient-to-br from-purple-900/20 to-blue-900/20",
            "bg-gradient-to-bl from-emerald-900/20 to-teal-900/20",
            "bg-gradient-to-tr from-orange-900/20 to-red-900/20",
        ],
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <Link href="/portfolio" className="inline-block mb-12">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-white/60 hover:text-white pl-0"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Portfolio
                        </Button>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Text
                                size="xs"
                                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 uppercase tracking-wider"
                            >
                                {project.category}
                            </Text>
                            <Text size="xs" variant="muted" className="font-mono">
                                {project.year}
                            </Text>
                        </div>
                        <Heading
                            level={1}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
                        >
                            {project.title}
                        </Heading>
                        <Text
                            size="lg"
                            variant="muted"
                            className="text-xl leading-relaxed max-w-2xl mx-auto"
                        >
                            {project.description}
                        </Text>
                    </motion.div>

                    {/* Main Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full aspect-video rounded-[var(--radius-3xl)] overflow-hidden border border-white/10 bg-white/5 relative mb-12"
                    >
                        <div className={cn("absolute inset-0", project.images[0])} />
                        <div className="absolute inset-0 flex items-center justify-center text-white/20">
                            [Main Project Screenshot]
                        </div>
                    </motion.div>

                    {/* Impact Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border-y border-white/5 py-12">
                        {project.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <Text
                                    size="xs"
                                    variant="muted"
                                    className="uppercase tracking-wider"
                                >
                                    {stat.label}
                                </Text>
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-20">
                        {/* Left Column: Narrative */}
                        <div className="md:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Heading level={3} className="text-2xl font-bold mb-4">
                                    The Challenge
                                </Heading>
                                <Text className="text-white/70 text-lg leading-relaxed">
                                    {project.challenge}
                                </Text>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Heading level={3} className="text-2xl font-bold mb-4">
                                    The Solution
                                </Heading>
                                <Text className="text-white/70 text-lg leading-relaxed">
                                    {project.solution}
                                </Text>
                            </motion.div>
                        </div>

                        {/* Right Column: Details */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02]"
                            >
                                <div className="space-y-6">
                                    <div>
                                        <Text
                                            size="xs"
                                            variant="muted"
                                            className="uppercase tracking-wider mb-2"
                                        >
                                            Role
                                        </Text>
                                        <Text size="lg" className="font-medium">
                                            {project.role}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text
                                            size="xs"
                                            variant="muted"
                                            className="uppercase tracking-wider mb-2"
                                        >
                                            Links
                                        </Text>
                                        <div className="flex flex-col gap-3">
                                            <Link
                                                href={project.liveLink}
                                                className="flex items-center text-white hover:text-white/80 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Link>
                                            <Link
                                                href={project.githubLink}
                                                className="flex items-center text-white hover:text-white/80 transition-colors"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Source Code
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Text
                                    size="xs"
                                    variant="muted"
                                    className="uppercase tracking-wider mb-4"
                                >
                                    Tech Stack
                                </Text>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-20">
                        <Heading level={3} className="text-2xl font-bold mb-8 text-center">
                            Key Features
                        </Heading>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start gap-4 hover:bg-white/[0.04] transition-colors"
                                >
                                    <div className="p-3 rounded-xl bg-white/5 text-white">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <Heading level={4} className="text-lg font-bold mb-2">
                                            {feature.title}
                                        </Heading>
                                        <Text size="sm" variant="muted">
                                            {feature.desc}
                                        </Text>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Under the Hood (Technical Deep Dive) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 p-8 md:p-12 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                            <Code2 className="w-64 h-64" />
                        </div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-2 text-accent mb-4">
                                    <Code2 className="w-5 h-5" />
                                    <Text size="sm" variant="mono" className="font-bold">
                                        UNDER THE HOOD
                                    </Text>
                                </div>
                                <Heading level={3} className="text-3xl font-bold mb-6">
                                    Custom WebSocket Engine
                                </Heading>
                                <Text className="text-white/70 mb-6 leading-relaxed">
                                    To achieve sub-50ms latency, we bypassed standard polling and
                                    implemented a custom WebSocket engine that handles data
                                    deduplication and throttling on the client side.
                                </Text>
                                <ul className="space-y-3">
                                    {[
                                        "Binary message format for reduced payload",
                                        "Client-side delta compression",
                                        "Automatic reconnection strategies",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-3 text-sm text-white/80"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-6 font-mono text-xs text-white/60 overflow-x-auto">
                                <pre>{`// WebSocket Connection Handler
class DataStream {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.queue = [];
  }

  connect() {
    this.ws.onmessage = (event) => {
      const data = this.decompress(event.data);
      this.batchUpdate(data);
    };
  }

  batchUpdate(data) {
    // Custom throttling logic
    requestAnimationFrame(() => {
      this.store.dispatch(update(data));
    });
  }
}`}</pre>
                            </div>
                        </div>
                    </motion.div>

                    {/* Gallery */}
                    <div className="space-y-12 mb-20">
                        <Heading level={3} className="text-2xl font-bold mb-8">
                            Project Gallery
                        </Heading>
                        {project.images.slice(1).map((imgClass, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="w-full aspect-[16/10] rounded-[var(--radius-3xl)] overflow-hidden border border-white/10 bg-white/5 relative"
                            >
                                <div className={cn("absolute inset-0", imgClass)} />
                                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                    [Gallery Image {index + 1}]
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Client Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center max-w-3xl mx-auto"
                    >
                        <div className="text-6xl text-white/10 font-serif mb-6">&quot;</div>
                        <Heading
                            level={3}
                            className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-8"
                        >
                            This dashboard completely transformed how our traders operate. The speed
                            and reliability are unmatched in the industry.
                        </Heading>
                        <div>
                            <Text className="font-bold text-white">Alex Morgan</Text>
                            <Text size="sm" variant="muted">
                                Head of Trading, Neon Exchange
                            </Text>
                        </div>
                    </motion.div>

                    {/* Next Project */}
                    <div className="pt-20 border-t border-white/10 flex justify-between items-center">
                        <div>
                            <Text size="sm" variant="muted" className="mb-2">
                                Next Project
                            </Text>
                            <Heading level={2} className="text-3xl md:text-4xl font-bold">
                                AI Image Generator
                            </Heading>
                        </div>
                        <Link href="/portfolio/next">
                            <Button
                                variant="secondary"
                                size="icon"
                                className="w-16 h-16 rounded-full"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
