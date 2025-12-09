"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";

import { services } from "@/data/services";
import { cn } from "@/lib/utils";

import { AIGraphic } from "./AIGraphic";
import { MobileGraphic } from "./MobileGraphic";
import { TechStackGraphic } from "./TechStack";
import { Heading } from "./ui/Heading";
import { SectionHeader } from "./ui/SectionHeader";
import { Text } from "./ui/Text";

// Image mapping for services
const serviceImages: Record<string, string> = {
    "01": "/images/services/web-platforms.png",
    "02": "/images/services/system-architecture.png",
    "03": "/images/services/ai-intelligence.png",
};

function ServiceGraphic({
    id,
    title,
    color,
    isHovered,
}: {
    id: string;
    title: string;
    color: string;
    isHovered: boolean;
}) {
    return (
        <div className="absolute inset-x-0 top-0 h-3/5 z-0">
            {/* Background Gradient Base */}
            <div
                className={`absolute inset-0 opacity-20 bg-gradient-to-b from-[${color}] to-transparent mix-blend-color-dodge`}
            />

            {/* Content Container */}
            <div className="absolute inset-0">
                {id === "01" ? (
                    // 3D Tech Stack for Web Platforms
                    <div className="absolute inset-0 flex items-center justify-center top-0 pt-12">
                        <div
                            className={cn(
                                "scale-[0.6] transition-all duration-700", // Scaled down to fit
                                "opacity-80 grayscale mix-blend-luminosity brightness-125 contrast-125", // Match other cards default state
                                "group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[0.65]" // Reveal color on hover
                            )}
                        >
                            <TechStackGraphic isHovered={isHovered} />
                        </div>
                    </div>
                ) : id === "02" ? (
                    // AI Sphere Graphic
                    <div className="absolute inset-0 flex items-center justify-center top-0 pt-12">
                        <div
                            className={cn(
                                "scale-[0.7] transition-all duration-700",
                                "opacity-80 grayscale mix-blend-luminosity brightness-125 contrast-125",
                                "group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[0.75]"
                            )}
                        >
                            <AIGraphic isHovered={isHovered} />
                        </div>
                    </div>
                ) : id === "03" ? (
                    // Mobile Graphic
                    <div className="absolute inset-0 flex items-center justify-center top-0 pt-12">
                        <div
                            className={cn(
                                "scale-[0.7] transition-all duration-700",
                                "opacity-80 grayscale mix-blend-luminosity brightness-125 contrast-125",
                                "group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-[0.75]"
                            )}
                        >
                            <MobileGraphic isHovered={isHovered} />
                        </div>
                    </div>
                ) : (
                    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
                        <Image
                            src={serviceImages[id]}
                            alt={`${title} - Backend development service illustration`}
                            fill
                            className={cn(
                                "object-cover object-center opacity-80 grayscale transition-all duration-700",
                                "mix-blend-luminosity brightness-125 contrast-125",
                                "group-hover:scale-105 group-hover:opacity-100"
                            )}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                    </div>
                )}
            </div>

            {/* Tech Overlay: Scanlines */}
            <div className="absolute inset-0 z-10 opacity-20 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />

            {/* Digital Noise */}
            <div className="absolute inset-0 z-10 opacity-[0.05] bg-[url('/noise.png')] mix-blend-overlay pointer-events-none" />

            {/* Bottom Fade to Card BG (Transition to Content) */}
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-transparent to-background" />
        </div>
    );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Link href={`/${service.slug}`} className="group relative block h-full w-full">
            <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative h-full min-h-[450px] md:min-h-[500px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-background/50 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.15]"
            >
                {/* Spotlight Gradient */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 80%)`,
                    }}
                />

                {/* Graphic anchored to top */}
                <ServiceGraphic id={service.id} title={service.title} color={service.color} isHovered={isHovered} />

                <div className="flex h-full flex-col p-8 md:p-10 relative z-20">
                    {/* Arrow icon only - appears on hover */}
                    <div className="absolute top-8 right-8 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                    </div>

                    {/* Spacer to push Content to bottom */}
                    <div className="flex-1" />

                    {/* Content Grouped at Bottom */}
                    <div className="space-y-5">
                        <Heading
                            level={3}
                            className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-accent transition-colors duration-300"
                        >
                            {service.title}
                        </Heading>

                        <Text
                            variant="muted"
                            className="line-clamp-3 text-base leading-relaxed text-white/60"
                        >
                            {service.description}
                        </Text>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function Services() {
    return (
        <section className="relative w-full bg-background py-16 md:py-20 z-10">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <SectionHeader
                        badgeText="Expertise"
                        title="Technical"
                        subtitle="Services"
                        align="left"
                    />
                </div>

                {/* 4-Column Grid -> 3-Column Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
