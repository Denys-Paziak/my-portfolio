import { Terminal } from "lucide-react";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { ContactForm } from "./ContactForm";

export function CTA() {
    return (
        <section
            id="contact"
            className="relative w-full py-24 md:py-32 overflow-hidden bg-background border-t border-[var(--glass-border)]"
        >
            {/* Background Elements */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(circle at center, black, transparent 80%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Form & Heading */}
                    <div className="space-y-8">
                        <div>
                            <Heading level={1} className="mb-6">
                                Let&apos;s Work <br />
                                <span className="text-accent">Together.</span>
                            </Heading>
                            <Text size="lg" variant="muted" className="max-w-md">
                                Have a project in mind? Fill out the form or play with the blocks on
                                the right to find me elsewhere.
                            </Text>
                        </div>

                        <ContactForm />
                    </div>

                    {/* Right: Visual Section */}
                    <div className="relative h-[500px] md:h-[600px] w-full bg-white/[0.02] rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                        <div className="text-center p-8">
                            <Terminal
                                className="w-16 h-16 text-accent mx-auto mb-6 opacity-50"
                                aria-hidden="true"
                            />
                            <Heading level={3} className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Deploy?
                            </Heading>
                            <Text size="lg" variant="muted" className="max-w-xs mx-auto">
                                Let&apos;s build something scalable and secure together.
                            </Text>
                        </div>

                        {/* Subtle Gradient Overlay for depth */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/40" />
                    </div>
                </div>
            </div>
        </section>
    );
}
