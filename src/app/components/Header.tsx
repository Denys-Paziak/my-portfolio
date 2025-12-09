"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "./ui/Button";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = [
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blog" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-background/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between w-full">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold tracking-tight text-foreground hover:text-accent transition-colors z-50"
                >
                    DP<span className="text-accent">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-white hover:text-accent transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="primary" size="sm">
                            Contact Me
                            <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="md:hidden z-50 p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </Button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen ? (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full h-[calc(100vh-4rem)] z-40 bg-black/95 backdrop-blur-2xl px-6 flex flex-col items-center justify-center md:hidden border-t border-white/10"
                        >
                            <nav className="flex flex-col gap-8 text-center">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-medium text-foreground hover:text-accent transition-colors tracking-tight"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="w-12 h-px bg-white/10 mx-auto my-4" />
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full min-w-[200px] justify-center text-lg"
                                    >
                                        Contact Me
                                    </Button>
                                </Link>
                            </nav>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </div>
        </header>
    );
}
