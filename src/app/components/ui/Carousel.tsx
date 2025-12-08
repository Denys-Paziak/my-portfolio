"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./Button";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Carousel({ children, className, ...props }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const childrenArray = React.Children.toArray(children);
    const count = childrenArray.length;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % count);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + count) % count);
    };

    return (
        <div className={cn("relative group", className)} {...props}>
            <div className="overflow-hidden rounded-xl border border-[var(--glass-border)] bg-card">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {childrenArray.map((child, index) => (
                        <div key={index} className="min-w-full flex-shrink-0">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={prev}
                    className="rounded-full w-10 h-10 p-0"
                >
                    <ChevronLeft className="w-5 h-5" />
                </Button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    variant="secondary"
                    size="sm"
                    onClick={next}
                    className="rounded-full w-10 h-10 p-0"
                >
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {childrenArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            index === currentIndex
                                ? "bg-accent w-4"
                                : "bg-white/20 hover:bg-white/40"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}

export function CarouselItem({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn("p-1", className)} {...props}>
            {children}
        </div>
    );
}
