"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { SectionHeader } from "./ui/SectionHeader";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

const faqs = [
    {
        id: "01",
        question: "How do you handle project communication?",
        answer: "I believe in transparent, asynchronous communication. We'll use a dedicated Slack/Discord channel for daily updates and Notion for project management. Weekly syncs ensure we stay aligned on goals.",
        category: "Process",
        color: "bg-purple-500",
    },
    {
        id: "02",
        question: "What is your typical tech stack?",
        answer: "My core stack is Next.js (React), TypeScript, and Tailwind CSS for the frontend. For backend, I prefer Python (FastAPI) or Node.js. I deploy on Vercel or AWS depending on scalability needs.",
        category: "Tech",
        color: "bg-emerald-500",
    },
    {
        id: "03",
        question: "Do you offer post-launch support?",
        answer: "Yes, every project includes a 30-day warranty period for bug fixes. After that, I offer retainer packages for ongoing maintenance, feature updates, and performance monitoring.",
        category: "Support",
        color: "bg-blue-500",
    },
    {
        id: "04",
        question: "What are your payment terms?",
        answer: "Typically, I work with a 40/40/20 split: 40% upfront to book the slot, 40% upon design approval/mid-point, and 20% before final handoff and deployment.",
        category: "Pricing",
        color: "bg-orange-500",
    },
    {
        id: "05",
        question: "Can you help with design?",
        answer: "Absolutely. I specialize in 'Engineering Design'—creating functional, beautiful interfaces. If you need complex branding or illustration, I partner with specialized designers.",
        category: "Design",
        color: "bg-pink-500",
    },
    {
        id: "06",
        question: "How long does a typical project take?",
        answer: "A standard marketing site takes 2-4 weeks. Complex web applications usually range from 6-12 weeks depending on the feature set and requirements.",
        category: "Timeline",
        color: "bg-yellow-500",
    },
];

export function FAQ() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <section className="relative py-20 md:py-24 w-full bg-background overflow-hidden">

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <SectionHeader
                        align="center"
                        badgeText="Common Questions"
                        title="Frequently"
                        subtitle="Asked"
                    />
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedId(faq.id)}
                            className="group relative cursor-pointer rounded-[var(--radius-3xl)] bg-[var(--glass-bg)] border border-[var(--glass-border)] p-6 md:p-8 hover:bg-white/[0.02] transition-colors overflow-hidden"
                        >

                            <div className="flex justify-between items-start mb-6">
                                <Text variant="mono" size="xs" className="text-white/40 tracking-wider">/{faq.id}</Text>
                                <div className={cn("w-2 h-2 rounded-full", faq.color)} />
                            </div>

                            <Heading level={3} className="text-xl md:text-2xl font-medium leading-snug pr-8">
                                {faq.question}
                            </Heading>

                            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-[var(--glass-border)] group-hover:bg-white/10 transition-colors">
                                <Plus className="w-4 h-4 text-white/60" aria-hidden="true" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expanded Overlay */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                            />

                            {/* Expanded Card */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="relative w-full max-w-2xl bg-card border border-[var(--glass-border)] rounded-[var(--radius-3xl)] p-8 md:p-12 shadow-2xl overflow-hidden"
                            >
                                {(() => {
                                    const faq = faqs.find((f) => f.id === selectedId)!;
                                    return (
                                        <>
                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-10">
                                                    <div className="flex items-center gap-3">
                                                        <Text variant="mono" size="sm" className="text-white/40">/{faq.id}</Text>
                                                        <Text size="xs" as="span" className="px-3 py-1 rounded-full bg-white/5 border border-[var(--glass-border)] text-white/60">
                                                            {faq.category}
                                                        </Text>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedId(null);
                                                        }}
                                                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 p-0 border border-[var(--glass-border)]"
                                                    >
                                                        <X className="w-5 h-5 text-white/60" aria-hidden="true" />
                                                    </Button>
                                                </div>

                                                <Heading level={3} className="text-3xl md:text-4xl mb-6 leading-tight">
                                                    {faq.question}
                                                </Heading>

                                                <Text size="lg" variant="muted" className="leading-relaxed">
                                                    {faq.answer}
                                                </Text>

                                                <div className="mt-10 pt-10 border-t border-[var(--glass-border)] flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                                        <div className={cn("w-2 h-2 rounded-full", faq.color)} />
                                                    </div>
                                                    <Text size="sm" variant="muted">
                                                        Have more questions? <a href="#contact" className="text-foreground hover:text-accent transition-colors underline">Contact me</a>
                                                    </Text>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
