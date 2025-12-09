import { Metadata } from "next";

import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";

export const metadata: Metadata = {
    title: "Denys Paziak | Backend Engineer & Architect",
    description:
        "Backend Engineer specializing in scalable architectures, Python, Node.js, and Cloud Infrastructure. Building digital fortresses.",
    openGraph: {
        title: "Denys Paziak | Backend Engineer",
        description: "Building scalable and secure digital infrastructures.",
        type: "website",
        images: ["/og-image.jpg"], // Ensure this exists or use a generic one
    },
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Hero />
            <Services />
            <Portfolio />
            <Reviews />
            <Blog />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
