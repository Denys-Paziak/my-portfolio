import { Metadata } from "next";

import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { Expertise } from "./components/Expertise";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";

export const metadata: Metadata = {
    title: "Denys Paziak | Backend Engineer & Architect",
    description:
        "Backend Engineer & System Architect з експертизою в Python, Node.js, PostgreSQL, SaaS-архітектурах, AI-системах та хмарній інфраструктурі. Розробляю масштабовані платформи, API, мікросервіси та технічні рішення під бізнес-цілі.",
    alternates: {
        canonical: "https://denispazak.com",
    },
    openGraph: {
        title: "Denys Paziak | Backend Engineer",
        description:
            "Backend Engineer & System Architect. Розробляю масштабовані платформи, API та мікросервіси з Python, Node.js, PostgreSQL.",
        type: "website",
        url: "https://denispazak.com",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Denys Paziak | Backend Engineer",
        description:
            "Backend Engineer & System Architect. Розробляю масштабовані платформи, API та мікросервіси з Python, Node.js, PostgreSQL.",
    },
};

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Hero />
            <Stats />
            <Services />
            <Portfolio />
            <Reviews />
            <Blog />
            <FAQ />
            <CTA />
            <Expertise />
            <Footer />
        </main>
    );
}
