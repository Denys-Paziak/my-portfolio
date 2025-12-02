"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";
import { Text } from "./ui/Text";

const reviews = [
    {
        id: 1,
        text: "We came with a raw prototype. In 2 months we received a stable production build without downtime. The API architecture is solid and scales perfectly.",
        author: "Andriy K.",
        role: "CEO, NovaPay",
        accent: "border-l-purple-500 shadow-purple-500/10",
        rotate: "-1deg",
    },
    {
        id: 2,
        text: "The 3D optimization is incredible. We thought WebGL would lag on mobile, but the implementation is buttery smooth. A true engineering approach to visuals.",
        author: "Olena M.",
        role: "Product Owner, Carpathians 360",
        accent: "border-l-emerald-500 shadow-emerald-500/10",
        rotate: "1.5deg",
    },
    {
        id: 3,
        text: "Complex data visualization made simple. The real-time WebSocket updates are instant, and the dashboard load time is under 400ms. Highly recommended.",
        author: "Maksym R.",
        role: "CTO, EcoPulse",
        accent: "border-l-orange-500 shadow-orange-500/10",
        rotate: "-2deg",
    },
    {
        id: 4,
        text: "Finally, a developer who understands business logic. The backend code is clean, documented, and easy for our team to maintain. A pleasure to work with.",
        author: "Sarah L.",
        role: "Founder, DevTools",
        accent: "border-l-blue-500 shadow-blue-500/10",
        rotate: "1deg",
    },
    {
        id: 5,
        text: "The migration from legacy monolith to microservices was seamless. No data loss, zero downtime, and performance improved by 300%.",
        author: "Viktor P.",
        role: "VP Engineering, TechCorp",
        accent: "border-l-pink-500 shadow-pink-500/10",
        rotate: "-1.5deg",
    },
    {
        id: 6,
        text: "Exceptional attention to detail. The UI animations are subtle yet impactful, creating a truly premium feel for our SaaS platform.",
        author: "Iryna S.",
        role: "Design Lead, CreativeStudio",
        accent: "border-l-yellow-500 shadow-yellow-500/10",
        rotate: "2deg",
    },
];

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
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
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative shrink-0 w-[85vw] md:w-[400px] p-8 rounded-r-2xl rounded-l-sm flex flex-col justify-between min-h-[350px] bg-[var(--glass-bg)] backdrop-blur-md border-y border-r border-[var(--glass-border)] border-l-4 shadow-2xl overflow-hidden",
                review.accent
            )}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Quote Icon */}
            <div className="mb-6 relative z-10">
                <Text as="span" className="text-4xl leading-none text-white/10 font-serif">
                    "
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
        </motion.div>
    );
}

export function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const [scrollRange, setScrollRange] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const desktop = window.innerWidth >= 768;
            setIsDesktop(desktop);
            if (trackRef.current && desktop) {
                const width = trackRef.current.scrollWidth - window.innerWidth;
                setScrollRange(width > 0 ? width + 200 : 0);
            } else {
                setScrollRange(0);
            }
        };

        // Initial check
        handleResize();

        // Re-measure when trackRef becomes available
        if (trackRef.current) {
            const width = trackRef.current.scrollWidth - window.innerWidth;
            setScrollRange(width > 0 ? width + 200 : 0);
        }

        const observer = new ResizeObserver(handleResize);
        if (trackRef.current) {
            observer.observe(trackRef.current);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, [isDesktop]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Start scrolling immediately upon entering the section
    const effectiveProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const x = useTransform(effectiveProgress, [0, 1], [0, -scrollRange]);

    return (
        <section
            ref={containerRef}
            className={cn(
                "relative bg-background w-full",
                isDesktop ? "h-[400vh]" : "h-auto py-20"
            )}
        >
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]"
                />
            </div>

            <div
                className={cn(
                    "w-full",
                    isDesktop
                        ? "sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
                        : "relative px-6"
                )}
            >
                <div className="max-w-7xl mx-auto mb-12 md:mb-16 w-full">
                    <SectionHeader
                        badgeText="Testimonials"
                        title="Kind Words"
                        description="Feedback from partners I've had the pleasure to work with."
                        align="center"
                    />
                </div>

                {/* Desktop Horizontal Scroll Track */}
                {isDesktop ? (
                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        className="flex gap-8 px-20 w-max items-center pt-10 will-change-transform"
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={review.id} review={review} index={index} />
                        ))}
                    </motion.div>
                ) : (
                    /* Mobile Vertical Stack */
                    <div className="flex flex-col gap-6 items-center">
                        {reviews.map((review, index) => (
                            <div key={review.id} className="w-full max-w-md">
                                <ReviewCard review={review} index={index} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
