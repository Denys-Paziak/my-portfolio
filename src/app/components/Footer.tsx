"use client";

import { ArrowRight } from "lucide-react";

import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Heading } from "./ui/Heading";
import { Input } from "./ui/Input";
import { Separator } from "./ui/Separator";
import { Stack } from "./ui/Stack";
import { Text } from "./ui/Text";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-background border-t border-[var(--glass-border)] overflow-hidden pt-20 pb-10">
            {/* Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "linear-gradient(to bottom, black, transparent)",
                }}
            />

            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20" />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    {/* Newsletter / CTA */}
                    <div className="col-span-1 lg:col-span-5 flex flex-col justify-between text-center md:text-left">
                        <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <Text
                                    size="xs"
                                    variant="mono"
                                    className="text-emerald-500 font-medium"
                                >
                                    SYSTEM ONLINE
                                </Text>
                            </div>

                            <Heading
                                level={2}
                                className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                            >
                                Let&apos;s Connect
                            </Heading>

                            <div className="max-w-md mx-auto md:mx-0">
                                <Text size="lg" className="text-white/60 mb-8 leading-relaxed">
                                    Join the newsletter for insights on engineering and design.
                                </Text>

                                <form
                                    className="relative flex items-center"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="pr-12 bg-white/5 border-white/10 hover:border-white/20 focus:border-white/30 rounded-xl h-12 w-full transition-all duration-300"
                                    />
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="absolute right-1 w-10 h-10 rounded-lg hover:bg-white/10 text-white"
                                        aria-label="Subscribe"
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 pl-0 lg:pl-12 text-center md:text-left">
                        {/* Navigation */}
                        <Stack gap={4}>
                            <Text
                                variant="mono"
                                size="xs"
                                className="uppercase tracking-widest text-white/30 mb-2"
                            >
                                Navigation
                            </Text>
                            <ul className="space-y-1 flex flex-col items-center md:items-start">
                                {[
                                    { label: "Work", href: "/portfolio" },
                                    { label: "Services", href: "/services" },
                                    { label: "About", href: "/about" },
                                    { label: "Blog", href: "/blog" },
                                    { label: "Contact", href: "/contact" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Button
                                            variant="ghost"
                                            size="md"
                                            href={item.href}
                                            className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                        >
                                            {item.label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </Stack>

                        {/* Socials */}
                        <Stack gap={4}>
                            <Text
                                variant="mono"
                                size="xs"
                                className="uppercase tracking-widest text-white/30 mb-2"
                            >
                                Connect
                            </Text>
                            <ul className="space-y-1 flex flex-col items-center md:items-start">
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="https://github.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        GitHub
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        Twitter
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        LinkedIn
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="mailto:hello@example.com"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        Email
                                    </Button>
                                </li>
                            </ul>
                        </Stack>

                        {/* Legal */}
                        <Stack gap={4}>
                            <Text
                                variant="mono"
                                size="xs"
                                className="uppercase tracking-widest text-white/30 mb-2"
                            >
                                Legal
                            </Text>
                            <ul className="space-y-1 flex flex-col items-center md:items-start">
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="/privacy"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        Privacy Policy
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        variant="ghost"
                                        size="md"
                                        href="/terms"
                                        className="justify-center md:justify-start px-0 h-auto hover:bg-transparent hover:text-white text-white/60 font-normal text-sm"
                                    >
                                        Terms of Service
                                    </Button>
                                </li>
                            </ul>
                        </Stack>
                    </div>
                </div>

                <Separator className="bg-white/10 mb-8 md:mb-12" />

                {/* Bottom Bar */}
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">
                                DP
                            </div>
                            <Text size="sm" className="text-white/40">
                                Engineering digital experiences
                            </Text>
                        </div>
                        <div className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                        <Text size="sm" className="text-white/40">
                            © {new Date().getFullYear()} Denis Paziak
                        </Text>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <Text size="xs" variant="mono" className="text-white/30">
                                v2.0.1
                            </Text>
                        </div>
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={scrollToTop}
                            className="rounded-full h-8 border-white/10 hover:bg-white/10 hover:border-white/20 text-xs"
                            aria-label="Back to top"
                        >
                            Back to Top
                        </Button>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
