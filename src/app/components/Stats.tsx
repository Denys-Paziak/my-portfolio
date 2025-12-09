"use client";

import { Text } from "./ui/Text";

export function Stats() {
    const stats = [
        { value: "5+", label: "Years Experience" },
        { value: "30+", label: "Projects Delivered" },
        { value: "15+", label: "Happy Clients" },
        { value: "99%", label: "Client Satisfaction" },
    ];

    return (
        <section className="relative w-full bg-background border-y border-white/5 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                                {stat.value.replace("+", "")}
                                <span className="text-accent">
                                    {stat.value.includes("+") ? "+" : stat.value.includes("%") ? "%" : ""}
                                </span>
                            </div>
                            <Text size="sm" className="text-white/60 uppercase tracking-wider">
                                {stat.label}
                            </Text>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
