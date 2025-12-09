"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { GlassCard } from "./ui/Card";
import { SectionHeader } from "./ui/SectionHeader";
import { Text } from "./ui/Text";

const reviews = [
    {
        id: 1,
        text: "We came with a raw prototype. In 2 months we received a stable production build without downtime. The API architecture is solid and scales perfectly.",
        author: "Andriy K.",
        role: "CEO, NovaPay",
        accent: "border-l-purple-500",
        rotate: "-1deg",
    },
    {
        id: 2,
        text: "The 3D optimization is incredible. We thought WebGL would lag on mobile, but the implementation is buttery smooth. A true engineering approach to visuals.",
        author: "Olena M.",
        role: "Product Owner, Carpathians 360",
        accent: "border-l-emerald-500",
        rotate: "1.5deg",
    },
    {
        id: 3,
        text: "Complex data visualization made simple. The real-time WebSocket updates are instant, and the dashboard load time is under 400ms. Highly recommended.",
        author: "Maksym R.",
        role: "CTO, EcoPulse",
        accent: "border-l-orange-500",
        rotate: "-2deg",
    },
    {
        id: 4,
        text: "Finally, a developer who understands business logic. The backend code is clean, documented, and easy for our team to maintain. A pleasure to work with.",
        author: "Sarah L.",
        role: "Founder, DevTools",
        accent: "border-l-blue-500",
        rotate: "1deg",
    },
    {
        id: 5,
        text: "The migration from legacy monolith to microservices was seamless. No data loss, zero downtime, and performance improved by 300%.",
        author: "Viktor P.",
        role: "VP Engineering, TechCorp",
        accent: "border-l-pink-500",
        rotate: "-1.5deg",
    },
    {
        id: 6,
        text: "Exceptional attention to detail. The UI animations are subtle yet impactful, creating a truly premium feel for our SaaS platform.",
        author: "Iryna S.",
        role: "Design Lead, CreativeStudio",
        accent: "border-l-yellow-500",
        rotate: "2deg",
    },
];

const MotionCard = motion(GlassCard);

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
    return (
        <MotionCard
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotate: review.rotate,
                transition: { duration: 0.6, delay: index * 0.1 },
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                scale: 1.02,
                rotate: "0deg",
                transition: { duration: 0.3 },
            }}
            className={cn(
                "group w-full p-8 flex flex-col justify-between h-full min-h-[300px]",
                review.accent
            )}
        >
            {/* Quote Icon */}
            <div className="mb-6 relative z-10">
                <Text as="span" className="text-4xl leading-none text-white/10 font-serif">
                    &quot;
                </Text>
            </div>

            {/* Text */}
            <Text
                size="lg"
                className="text-white/80 font-light leading-relaxed mb-8 flex-1 relative z-10"
            >
                {review.text}
            </Text>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-[var(--glass-border)] relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 font-bold text-sm border border-[var(--glass-border)]">
                    {review.author.charAt(0)}
                </div>
                <div>
                    <Text size="base" className="text-white font-medium">
                        {review.author}
                    </Text>
                    <Text size="sm" variant="muted">
                        {review.role}
                    </Text>
                </div>
            </div>

        </MotionCard>
    );
}

export function Reviews() {
    return (
        <section className="relative bg-background w-full py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-12 md:mb-16 w-full">
                    <SectionHeader
                        badgeText="Testimonials"
                        title="Kind Words"
                        description="Feedback from partners I've had the pleasure to work with."
                        align="center"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={review.id} review={review} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
