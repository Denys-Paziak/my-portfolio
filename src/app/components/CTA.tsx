"use client";

import dynamic from "next/dynamic";

import { ContactForm } from "./ContactForm";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

const PhysicsSocialBlocks = dynamic(
    () => import("./PhysicsSocialBlocks").then((mod) => mod.PhysicsSocialBlocks),
    {
        ssr: false,
        loading: () => (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-white/[0.02]">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
        ),
    }
);

export function CTA() {
    return (
        <section
            id="contact"
            className="relative w-full py-16 md:py-20 overflow-hidden bg-background border-t border-[var(--glass-border)]"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Form & Heading */}
                    <div className="space-y-6">
                        <div>
                            <Heading level={2} className="mb-4">
                                Let&apos;s Work <br />
                                <span className="text-accent">Together.</span>
                            </Heading>
                            <Text size="lg" variant="muted" className="max-w-md">
                                Have a project in mind? Fill out the form or play with the blocks on
                                the right to find me elsewhere.
                            </Text>
                        </div>

                        <ContactForm />
                    </div>

                    {/* Right: Interactive Social Blocks */}
                    <div className="relative h-full min-h-[400px] w-full bg-white/[0.02] rounded-[var(--radius-3xl)] border border-white/10 overflow-hidden shadow-2xl mt-6 lg:mt-0">
                        <PhysicsSocialBlocks />

                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/20" />

                        {/* Instruction Text */}
                        <div className="absolute bottom-6 w-full text-center pointer-events-none">
                            <Text size="xs" variant="muted" className="opacity-60">
                                Drag the blocks!
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
