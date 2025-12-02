import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Blog } from "./components/Blog";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

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
