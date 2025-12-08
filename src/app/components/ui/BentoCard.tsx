"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/[0.07]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
