"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Twitter, Linkedin, Mail, ArrowRight, Terminal } from "lucide-react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Container } from "./ui/Container";
import { Separator } from "./ui/Separator";
import { Stack } from "./ui/Stack";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative w-full bg-background border-t border-[var(--glass-border)] overflow-hidden pt-20 pb-10">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black, transparent)'
                }}
            />

            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/20" />

            <Container className="relative z-10">
                <Stack gap={20}>
                    {/* Top Section: Main CTA */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <Stack gap={6}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                <Text variant="mono" size="xs" className="text-green-500 uppercase tracking-widest">
                                    System Ready
                                </Text>
                            </div>
                            <Heading level={1} className="text-[12vw] leading-[0.8] tracking-tighter text-foreground select-none">
                                CONNECT
                            </Heading>
                        </Stack>

                        <Stack gap={6} className="w-full max-w-md">
                            <Text size="lg" variant="muted">
                                Let's build something extraordinary together.
                            </Text>
                            <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                                <Input
                                    placeholder="Enter email address"
                                    className="bg-white/5 border-[var(--glass-border)] focus:border-white/30 text-foreground placeholder:text-muted-foreground rounded-r-none border-r-0"
                                />
                                <Button variant="primary" className="shrink-0 rounded-l-none">
                                    Send Signal
                                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                                </Button>
                            </form>
                        </Stack>
                    </div>

                    <Separator />

                    {/* Middle Section: Links */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <Stack gap={6}>
                            <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                                <Text as="span" className="font-bold text-background text-xl">D</Text>
                            </div>
                            <Text size="sm" variant="muted" className="max-w-[200px]">
                                Engineering digital experiences with precision and passion.
                            </Text>
                        </Stack>

                        {/* Navigation */}
                        <Stack gap={6}>
                            <Text variant="mono" size="xs" className="uppercase tracking-widest font-medium">
                                /Navigation
                            </Text>
                            <ul className="space-y-2">
                                {[
                                    { label: "Services", href: "/services" },
                                    { label: "Portfolio", href: "/portfolio" },
                                    { label: "Blog", href: "/blog" },
                                    { label: "About", href: "/about" },
                                    { label: "Contact", href: "/contact" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Button variant="ghost" size="md" href={item.href} className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                            {item.label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </Stack>

                        {/* Socials */}
                        <Stack gap={6}>
                            <Text variant="mono" size="xs" className="uppercase tracking-widest font-medium">
                                /Connect
                            </Text>
                            <ul className="space-y-2">
                                <li>
                                    <Button variant="ghost" size="md" href="https://github.com" target="_blank" rel="noopener noreferrer" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                                        GitHub
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" size="md" href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        <Twitter className="w-4 h-4 mr-2" aria-hidden="true" />
                                        Twitter
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" size="md" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        <Linkedin className="w-4 h-4 mr-2" aria-hidden="true" />
                                        LinkedIn
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" size="md" href="mailto:hello@example.com" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                                        Email
                                    </Button>
                                </li>
                            </ul>
                        </Stack>

                        {/* Legal */}
                        <Stack gap={6}>
                            <Text variant="mono" size="xs" className="uppercase tracking-widest font-medium">
                                /Legal
                            </Text>
                            <ul className="space-y-2">
                                <li>
                                    <Button variant="ghost" size="md" href="/privacy" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        Privacy Policy
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="ghost" size="md" href="/terms" className="justify-start px-0 hover:bg-transparent hover:text-foreground text-muted-foreground">
                                        Terms of Service
                                    </Button>
                                </li>
                            </ul>
                        </Stack>
                    </div>

                    <Separator />

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <Text size="sm" variant="muted">
                            © {new Date().getFullYear()} Denis Pazak. All rights reserved.
                        </Text>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                <Text variant="mono" size="xs" className="text-accent">
                                    v2.4.0
                                </Text>
                            </div>
                            <Button variant="secondary" size="sm" onClick={scrollToTop} className="rounded-full" aria-label="Return to top">
                                <ArrowUp className="w-4 h-4 mr-2" aria-hidden="true" />
                                Return to Top
                            </Button>
                        </div>
                    </div>
                </Stack>
            </Container>
        </footer>
    );
}
