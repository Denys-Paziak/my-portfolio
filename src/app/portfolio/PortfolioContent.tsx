"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Footer } from "../components/Footer";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Text } from "../components/ui/Text";

// Mock Data
const allProjects = [
    {
        id: "01",
        title: "Neon FinTech",
        category: "FinTech",
        image: "/project1.jpg", // Placeholder
        description: "A high-frequency trading platform with real-time visualization.",
        tags: ["Next.js", "WebSocket", "D3.js"],
        link: "#",
    },
    {
        id: "02",
        title: "AeroSpace Dashboard",
        category: "Dashboard",
        image: "/project2.jpg",
        description: "Mission control interface for satellite telemetry monitoring.",
        tags: ["React", "WebGL", "Tailwind"],
        link: "#",
    },
    {
        id: "03",
        title: "Quantum AI",
        category: "AI / ML",
        image: "/project3.jpg",
        description: "Interface for configuring and training quantum neural networks.",
        tags: ["Python", "TensorFlow", "FastAPI"],
        link: "#",
    },
    {
        id: "04",
        title: "CyberSec Vault",
        category: "Security",
        image: "/project4.jpg",
        description: "Zero-knowledge encryption storage solution for enterprise.",
        tags: ["Rust", "WASM", "Next.js"],
        link: "#",
    },
    {
        id: "05",
        title: "EcoTrack IoT",
        category: "IoT",
        image: "/project5.jpg",
        description: "Real-time environmental monitoring system for smart cities.",
        tags: ["IoT", "MQTT", "React Native"],
        link: "#",
    },
    {
        id: "06",
        title: "MetaVerse Commerce",
        category: "E-Commerce",
        image: "/project6.jpg",
        description: "3D virtual shopping experience with crypto payments.",
        tags: ["Three.js", "Solidity", "Web3"],
        link: "#",
    },
    {
        id: "07",
        title: "HealthChain",
        category: "Healthcare",
        image: "/project7.jpg",
        description: "Blockchain-based medical record sharing platform.",
        tags: ["Blockchain", "Next.js", "Prisma"],
        link: "#",
    },
    {
        id: "08",
        title: "Urban Mobility",
        category: "Transport",
        image: "/project8.jpg",
        description: "AI-powered traffic management and routing system.",
        tags: ["Go", "gRPC", "Flutter"],
        link: "#",
    },
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioContent() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionHeader
                        align="center"
                        badgeText="Full Archive"
                        title="Selected"
                        subtitle="Works"
                        description="A comprehensive collection of projects spanning fintech, AI, and digital infrastructure."
                        className="mb-20"
                    />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        <AnimatePresence mode="wait">
                            {currentProjects.map((project, index) => (
                                <Link href={`/portfolio/${project.id}`} key={project.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="group relative bg-white/[0.02] border border-white/10 rounded-[var(--radius-3xl)] overflow-hidden hover:border-white/20 transition-colors duration-300 flex flex-col h-[450px]"
                                    >
                                        {/* Image Placeholder */}
                                        <div className="h-1/2 w-full bg-white/5 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
                                            {/* In a real app, use Next.js Image here */}
                                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-mono text-4xl font-bold">
                                                {project.title[0]}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col justify-between flex-grow">
                                            <div>
                                                <div className="flex justify-between items-start mb-4">
                                                    <Text
                                                        variant="mono"
                                                        size="xs"
                                                        className="text-white/40"
                                                    >
                                                        /{project.id}
                                                    </Text>
                                                    <Text
                                                        size="xs"
                                                        className="px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60"
                                                    >
                                                        {project.category}
                                                    </Text>
                                                </div>
                                                <Heading
                                                    level={4}
                                                    className="text-xl font-medium mb-2 group-hover:text-white transition-colors"
                                                >
                                                    {project.title}
                                                </Heading>
                                                <Text
                                                    size="sm"
                                                    variant="muted"
                                                    className="line-clamp-2"
                                                >
                                                    {project.description}
                                                </Text>
                                            </div>

                                            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                                                <div className="flex gap-2">
                                                    {project.tags.slice(0, 2).map((tag) => (
                                                        <Text
                                                            key={tag}
                                                            size="xs"
                                                            as="span"
                                                            className="uppercase tracking-wider text-foreground/40 font-medium"
                                                        >
                                                            {tag}
                                                        </Text>
                                                    ))}
                                                </div>
                                                <div
                                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                                                    aria-label={`View project: ${project.title}`}
                                                >
                                                    <ArrowUpRight
                                                        className="w-4 h-4"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4">
                            <Button
                                variant="secondary"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-12 h-12 p-0 rounded-full"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </Button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center text-sm font-mono transition-all duration-300 border border-transparent",
                                            currentPage === i + 1
                                                ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/10"
                                        )}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <Button
                                variant="secondary"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-12 h-12 p-0 rounded-full"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
