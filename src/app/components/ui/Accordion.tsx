"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface AccordionItemProps {
    value: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onClick?: () => void;
    index?: number;
}

export function AccordionItem({
    value: _value,
    trigger,
    children,
    isOpen,
    onClick,
    index = 0,
}: AccordionItemProps) {
    return (
        <motion.div
            initial={false}
            animate={{
                backgroundColor: isOpen ? "rgba(36, 209, 140, 0.03)" : "rgba(255, 255, 255, 0)",
                borderColor: isOpen ? "rgba(36, 209, 140, 0.3)" : "rgba(255, 255, 255, 0.05)",
            }}
            className={cn(
                "group relative border rounded-xl overflow-hidden transition-colors duration-500",
                "hover:border-white/10"
            )}
        >
            {/* Active Glow Effect */}
            {isOpen ? (
                <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 bg-accent/5 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            ) : null}

            <button
                onClick={onClick}
                className="relative flex items-center justify-between w-full p-6 text-left z-10"
            >
                <div className="flex items-center gap-6">
                    <span
                        className={cn(
                            "text-xs font-mono tracking-widest transition-colors duration-300",
                            isOpen ? "text-accent" : "text-muted-foreground/50"
                        )}
                    >
                        {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span
                        className={cn(
                            "text-lg font-medium tracking-tight transition-colors duration-300",
                            isOpen
                                ? "text-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                        )}
                    >
                        {trigger}
                    </span>
                </div>

                <div
                    className={cn(
                        "relative w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-500",
                        isOpen
                            ? "border-accent text-accent bg-accent/10 rotate-90"
                            : "border-white/10 text-muted-foreground group-hover:border-white/30 group-hover:text-foreground"
                    )}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="minus"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                            >
                                <Minus className="w-4 h-4" aria-hidden="true" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="plus"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -90 }}
                            >
                                <Plus className="w-4 h-4" aria-hidden="true" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen ? (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                                opacity: { duration: 0.25, delay: 0.1 },
                            },
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: { duration: 0.3, ease: "easeInOut" },
                                opacity: { duration: 0.2 },
                            },
                        }}
                    >
                        <div className="px-6 pb-6 pl-[4.5rem] text-muted-foreground leading-relaxed relative z-10">
                            {children}
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </motion.div>
    );
}

interface AccordionProps {
    type?: "single" | "multiple";
    children: React.ReactNode;
    className?: string;
}

export function Accordion({ type = "single", children, className }: AccordionProps) {
    const [openItems, setOpenItems] = React.useState<string[]>([]);

    const handleItemClick = (value: string) => {
        if (type === "single") {
            setOpenItems(openItems.includes(value) ? [] : [value]);
        } else {
            setOpenItems((prev) =>
                prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
            );
        }
    };

    return (
        <div className={cn("w-full space-y-2", className)}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const item = child as React.ReactElement<AccordionItemProps>;
                    return React.cloneElement(item, {
                        isOpen: openItems.includes(item.props.value),
                        onClick: () => handleItemClick(item.props.value),
                        index: index,
                    });
                }
                return child;
            })}
        </div>
    );
}
