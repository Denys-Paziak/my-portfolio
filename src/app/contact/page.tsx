"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Github, Twitter, Linkedin, Send } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Text } from "../components/ui/Text";
import { Heading } from "../components/ui/Heading";
import { Badge } from "../components/ui/Badge";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Separator } from "../components/ui/Separator";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" aria-hidden="true" />,
        label: "Email",
        value: "hello@denispazak.com",
        href: "mailto:hello@denispazak.com",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: <MapPin className="w-5 h-5" aria-hidden="true" />,
        label: "Location",
        value: "Kyiv, Ukraine",
        href: null,
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: <Clock className="w-5 h-5" aria-hidden="true" />,
        label: "Response Time",
        value: "Within 24 hours",
        href: null,
        color: "from-emerald-500/20 to-green-500/20"
    },
];

const socialLinks = [
    {
        icon: <Github className="w-5 h-5" aria-hidden="true" />,
        label: "GitHub",
        href: "https://github.com",
        username: "@denispazak"
    },
    {
        icon: <Twitter className="w-5 h-5" aria-hidden="true" />,
        label: "Twitter",
        href: "https://twitter.com",
        username: "@denispazak"
    },
    {
        icon: <Linkedin className="w-5 h-5" aria-hidden="true" />,
        label: "LinkedIn",
        href: "https://linkedin.com",
        username: "Denis Pazak"
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">

            {/* Hero Section */}
            <section className="pt-40 pb-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl"
                    >
                        <Badge className="mb-8 border-accent/20 text-accent bg-accent/5">
                            Let's Connect
                        </Badge>
                        <Heading level={1} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            Get in Touch
                        </Heading>
                        <Text size="lg" variant="muted" className="text-xl md:text-2xl leading-relaxed max-w-2xl">
                            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                        </Text>
                    </motion.div>
                </Container>
            </section>

            <Separator className="opacity-10" />

            {/* Contact Info Cards */}
            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="block p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                                {item.icon}
                                            </div>
                                            <Text variant="mono" size="xs" className="text-muted-foreground mb-2 uppercase tracking-widest">
                                                {item.label}
                                            </Text>
                                            <Text className="text-lg font-medium group-hover:text-accent transition-colors">
                                                {item.value}
                                            </Text>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] relative overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-50`} />
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white/60">
                                                {item.icon}
                                            </div>
                                            <Text variant="mono" size="xs" className="text-muted-foreground mb-2 uppercase tracking-widest">
                                                {item.label}
                                            </Text>
                                            <Text className="text-lg font-medium">
                                                {item.value}
                                            </Text>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Main Contact Form Section */}
            <section className="py-20 bg-white/[0.02] border-y border-white/5">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Form Intro */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:sticky lg:top-32"
                        >
                            <SectionHeader
                                align="left"
                                badgeText="Send a Message"
                                title="Start a"
                                subtitle="Conversation"
                                description="Fill out the form and I'll get back to you within 24 hours. Let's discuss your project requirements."
                                className="mb-12"
                            />

                            <div className="space-y-8">
                                <div>
                                    <Heading level={3} className="text-xl font-bold mb-4 flex items-center gap-3">
                                        <Send className="w-5 h-5 text-accent" aria-hidden="true" />
                                        What to Expect
                                    </Heading>
                                    <ul className="space-y-3">
                                        {[
                                            "Quick response within 24 hours",
                                            "Free initial consultation",
                                            "Detailed project proposal",
                                            "Transparent pricing"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shadow-[0_0_10px_rgba(109,214,32,0.5)]" />
                                                <Text variant="muted">{item}</Text>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Separator className="opacity-10" />

                                <div>
                                    <Heading level={3} className="text-xl font-bold mb-4">
                                        Connect on Social
                                    </Heading>
                                    <div className="flex flex-col gap-3">
                                        {socialLinks.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                                                    {social.icon}
                                                </div>
                                                <div>
                                                    <Text size="sm" className="font-medium group-hover:text-accent transition-colors">
                                                        {social.label}
                                                    </Text>
                                                    <Text size="xs" variant="muted">
                                                        {social.username}
                                                    </Text>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <Container>
                    <SectionHeader
                        align="center"
                        badgeText="Common Questions"
                        title="Before You"
                        subtitle="Reach Out"
                        description="Quick answers to questions you might have."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                q: "What's your typical response time?",
                                a: "I respond to all inquiries within 24 hours during business days. Urgent requests are prioritized."
                            },
                            {
                                q: "Do you work with international clients?",
                                a: "Yes! I work with clients globally and am comfortable with remote collaboration across different time zones."
                            },
                            {
                                q: "What's your project minimum?",
                                a: "I typically work on projects starting from $5,000, but I'm flexible for the right opportunity."
                            },
                            {
                                q: "Do you offer ongoing support?",
                                a: "Absolutely. I provide maintenance packages and retainer options for long-term partnerships."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
                            >
                                <Heading level={4} className="text-lg font-bold mb-3">
                                    {faq.q}
                                </Heading>
                                <Text variant="muted" className="leading-relaxed">
                                    {faq.a}
                                </Text>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
