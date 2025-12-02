"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Globe, Cpu, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { Text } from "../components/ui/Text";
import { Heading } from "../components/ui/Heading";
import { Footer } from "../components/Footer";
import { Separator } from "../components/ui/Separator";
import { cn } from "@/lib/utils";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">

            <section className="pt-40 pb-20">
                <Container>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Text size="sm" variant="mono" className="text-accent mb-6 block">
                            / ABOUT ME
                        </Text>
                        <Heading level={1} className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl">
                            Engineering Digital Excellence.
                        </Heading>
                        <Text size="lg" variant="muted" className="max-w-2xl text-xl leading-relaxed">
                            I'm a software engineer obsessed with building scalable, high-performance applications. I bridge the gap between complex backend logic and intuitive user experiences.
                        </Text>
                    </motion.div>
                </Container>
            </section>

            <Separator />

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <SectionHeader
                                align="left"
                                badgeText="The Story"
                                title="Beyond the Code"
                                subtitle=""
                                description=""
                                className="mb-8"
                            />
                            <div className="space-y-6 leading-relaxed">
                                <Text size="base" className="text-foreground/70">
                                    My journey began with a curiosity for how things work under the hood. From tinkering with hardware to architecting distributed systems, I've always been driven by the challenge of solving complex problems.
                                </Text>
                                <Text size="base" className="text-foreground/70">
                                    Over the years, I've honed my skills in Python, React, and cloud infrastructure, working with startups and enterprises to deliver robust solutions. I believe in writing clean, maintainable code that stands the test of time.
                                </Text>
                                <Text size="base" className="text-foreground/70">
                                    When I'm not coding, you can find me exploring new technologies, contributing to open source, or optimizing my personal workflow.
                                </Text>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-square rounded-[var(--radius-3xl)] overflow-hidden bg-white/5 border border-white/10"
                        >
                            {/* Placeholder for Profile Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                [Profile Image Placeholder]
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/[0.02]">
                <Container size="md">
                    <SectionHeader
                        align="center"
                        badgeText="Experience"
                        title="Career"
                        subtitle="Timeline"
                        description="A chronological overview of my professional journey."
                        className="mb-16"
                    />

                    <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
                        {[
                            {
                                year: "2023 - Present",
                                role: "Senior Software Engineer",
                                company: "TechNova Solutions",
                                description: "Leading the backend team in migrating legacy monoliths to microservices architecture."
                            },
                            {
                                year: "2021 - 2023",
                                role: "Full Stack Developer",
                                company: "Creative Pulse",
                                description: "Developed and maintained multiple client-facing web applications using React and Python."
                            },
                            {
                                year: "2019 - 2021",
                                role: "Junior Developer",
                                company: "StartUp Inc.",
                                description: "Collaborated with cross-functional teams to build MVP features and optimize database queries."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                <div className="md:w-1/2" />
                                <div className="absolute left-0 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                                <div className={cn("md:w-1/2 pl-8 md:pl-0", index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
                                    <Text variant="mono" size="xs" className="text-accent mb-2">{item.year}</Text>
                                    <Heading level={3} className="text-xl font-bold mb-1">{item.role}</Heading>
                                    <Text size="sm" className="text-white/60 mb-2">{item.company}</Text>
                                    <Text size="sm" variant="muted">{item.description}</Text>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <SectionHeader
                        align="center"
                        badgeText="Arsenal"
                        title="Tech"
                        subtitle="Stack"
                        description="The tools and technologies I use to bring ideas to life."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Globe className="w-6 h-6" />,
                                title: "Frontend",
                                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
                            },
                            {
                                icon: <Database className="w-6 h-6" />,
                                title: "Backend",
                                skills: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"]
                            },
                            {
                                icon: <Cpu className="w-6 h-6" />,
                                title: "DevOps",
                                skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform"]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] hover:border-white/20 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                                    {category.icon}
                                </div>
                                <Heading level={3} className="text-xl font-bold mb-4">{category.title}</Heading>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
                                            <Text size="sm" variant="muted">{skill}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "User Centric", desc: "Building with the end user in mind, always." },
                            { title: "Scalable", desc: "Architecting systems that grow with the business." },
                            { title: "Clean Code", desc: "Writing maintainable, self-documenting code." },
                            { title: "Innovative", desc: "Constantly exploring new ways to solve problems." }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] text-center hover:bg-white/[0.03] transition-colors"
                            >
                                <Heading level={4} className="text-lg font-bold mb-2">{value.title}</Heading>
                                <Text size="sm" variant="muted">{value.desc}</Text>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 border-b border-white/5">
                <Container>
                    {[
                        { value: "5+", label: "Years Experience" },
                        { value: "50+", label: "Projects Delivered" },
                        { value: "100%", label: "Client Satisfaction" },
                        { value: "24/7", label: "Support" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <Text size="4xl" className="font-bold mb-2">{stat.value}</Text>
                            <Text size="sm" variant="muted" className="uppercase tracking-wider">{stat.label}</Text>
                        </motion.div>
                    ))}
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <SectionHeader
                        align="center"
                        badgeText="Methodology"
                        title="My"
                        subtitle="Process"
                        description="A structured approach to delivering high-quality results."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your goals, target audience, and technical requirements." },
                            { step: "02", title: "Design", desc: "Creating intuitive wireframes and high-fidelity prototypes." },
                            { step: "03", title: "Development", desc: "Writing clean, scalable code using modern best practices." },
                            { step: "04", title: "Launch", desc: "Deploying, testing, and optimizing for peak performance." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                            >
                                <Text variant="mono" size="xl" className="text-white/20 mb-6 block group-hover:text-white/40 transition-colors">/{item.step}</Text>
                                <Heading level={3} className="text-xl font-bold mb-4">{item.title}</Heading>
                                <Text size="sm" variant="muted">{item.desc}</Text>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 bg-white/[0.02] border-y border-white/5">
                <Container>
                    <SectionHeader
                        align="center"
                        badgeText="Feedback"
                        title="Client"
                        subtitle="Stories"
                        description="What people say about working with me."
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Denis is a rare breed of engineer who understands both code and design deeply. He transformed our platform.",
                                author: "Sarah Jenkins",
                                role: "CTO, FinTech Co."
                            },
                            {
                                quote: "The attention to detail and performance optimization was outstanding. Our load times dropped by 60%.",
                                author: "Michael Chen",
                                role: "Product Manager, E-com Inc."
                            },
                            {
                                quote: "Professional, communicative, and incredibly skilled. Delivered the project ahead of schedule.",
                                author: "Elena Rodriguez",
                                role: "Founder, ArtSpace"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-[var(--radius-3xl)] border border-white/10 bg-[var(--card)] relative"
                            >
                                <Text as="span" className="text-4xl text-foreground/10 absolute top-6 left-6 font-serif">"</Text>
                                <Text size="lg" className="italic text-foreground/80 mb-6 relative z-10">
                                    {testimonial.quote}
                                </Text>
                                <div>
                                    <Text size="sm" className="font-bold">{testimonial.author}</Text>
                                    <Text size="xs" variant="muted">{testimonial.role}</Text>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-20 text-center">
                <Container size="md">
                    <Heading level={2} className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to start a project?
                    </Heading>
                    <Text size="lg" variant="muted" className="mb-8">
                        Let's collaborate and build something amazing together.
                    </Text>
                    <Link href="/">
                        <Button variant="primary" size="lg">
                            Get in Touch
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </Container>
            </section>

            <Footer />
        </main>
    );
}
