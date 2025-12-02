"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

// Icon mapping для сервісів
const serviceIcons: Record<string, React.ReactNode> = {
  "01": (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
      <motion.circle cx="12" cy="12" r="10" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.path d="M2 12h20" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
    </motion.svg>
  ),
  "02": (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
      <motion.rect x="2" y="2" width="20" height="8" rx="2" ry="2" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.rect x="2" y="14" width="20" height="8" rx="2" ry="2" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.line x1="6" y1="6" x2="6.01" y2="6" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.line x1="6" y1="18" x2="6.01" y2="18" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
    </motion.svg>
  ),
  "03": (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
      <motion.path d="M12 2a10 10 0 1 0 10 10H12V2z" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.path d="M12 12 2.1 12a10.1 10.1 0 0 0 9.9 10V12z" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.path d="M21.9 12A10 10 0 0 0 12 2v10h9.9z" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
    </motion.svg>
  ),
  "04": (
    <motion.svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full">
      <motion.polygon points="12 2 2 7 12 12 22 7 12 2" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.polyline points="2 17 12 22 22 17" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
      <motion.polyline points="2 12 12 17 22 12" variants={{ hover: { pathLength: 1, opacity: 1 }, initial: { pathLength: 0, opacity: 0.3 } }} />
    </motion.svg>
  ),
};

function ServiceCard({ service }: { service: typeof services[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="hover"
      whileInView="initial"
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-[var(--radius-3xl)] border border-white/10 bg-white/[0.02] overflow-hidden",
        "flex flex-col justify-between p-6 md:p-8 h-[280px] md:h-[320px]",
        "transition-colors duration-300 hover:border-white/20",
        service.colSpan
      )}
    >
      {/* Minimal Hover State - Just a subtle border change */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon - Minimal & Technical */}
      <div className="absolute -right-4 -bottom-4 w-40 h-40 text-foreground/[0.03] group-hover:text-foreground/[0.08] transition-colors duration-500 pointer-events-none">
        {serviceIcons[service.id]}
      </div>

      {/* Top: ID */}
      <div className="relative z-10">
        <Text variant="mono" size="xs" className="text-foreground/40 group-hover:text-foreground/80 transition-colors">
          /{service.id}
        </Text>
      </div>

      {/* Bottom: Content */}
      <div className="relative z-10">
        <Heading level={3} className="text-2xl md:text-3xl font-medium mb-4 tracking-normal group-hover:translate-x-1 transition-transform duration-300">
          {service.title}
        </Heading>
        <Text size="lg" variant="muted" className="leading-relaxed mb-6 max-w-sm group-hover:text-foreground/80 transition-colors">
          {service.description}
        </Text>

        <div className="flex flex-wrap gap-2">
          {service.tags.map(tag => (
            <Text key={tag} variant="mono" size="xs" as="span" className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-foreground/50 group-hover:border-white/20 group-hover:text-foreground/90 transition-colors">
              {tag}
            </Text>
          ))}
        </div>
      </div>

    </motion.div>
  );
}

export function Services() {
  return (
    <section className="relative w-full bg-background z-10 py-20 md:py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            badgeText="Expertise"
            title="Technical"
            subtitle="Services"
            description="I build high-performance digital infrastructure for ambitious companies. From scalable backend systems to intelligent AI agents, I engineer solutions that drive real business growth."
            align="center"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
