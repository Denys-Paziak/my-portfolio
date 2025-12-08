import { Blog } from "./components/Blog";
import { CTA } from "./components/CTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
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
