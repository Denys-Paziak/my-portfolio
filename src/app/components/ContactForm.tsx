"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { useToast } from "./ui/Toast";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast({
                title: "Message sent!",
                message: "Thank you for reaching out. I'll get back to you soon.",
                type: "success",
            });

            (e.target as HTMLFormElement).reset();
        } catch {
            toast({
                title: "Error",
                message: "Failed to send message. Please try again later.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="relative bg-[var(--card)] border border-[var(--glass-border)] p-6 md:p-8 shadow-2xl rounded-[var(--radius-3xl)]">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-white/60 ml-1 mb-1 block"
                        >
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            disabled={isSubmitting}
                            className="h-11"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-white/60 ml-1 mb-1 block"
                        >
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            disabled={isSubmitting}
                            className="h-11"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium text-white/60 ml-1 mb-1 block"
                    >
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        className="min-h-[100px]"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                </Button>
            </form>
        </div>
    );
}
