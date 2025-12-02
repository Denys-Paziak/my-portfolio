import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Denis Pazak - Backend Engineer & Full Stack Developer",
        template: "%s | Denis Pazak",
    },
    description:
        "Building clean, modern backend with Python. Scalable systems, high-performance applications, and digital excellence.",
    keywords: [
        "backend developer",
        "Python",
        "Next.js",
        "React",
        "full stack",
        "software engineer",
    ],
    authors: [{ name: "Denis Pazak" }],
    creator: "Denis Pazak",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://denispazak.com",
        siteName: "Denis Pazak Portfolio",
        title: "Denis Pazak - Backend Engineer & Full Stack Developer",
        description:
            "Building clean, modern backend with Python. Scalable systems, high-performance applications, and digital excellence.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Denis Pazak - Backend Engineer",
        description: "Building clean, modern backend with Python.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

import { Header } from "./components/Header";
import { ToastProvider } from "./components/ui/Toast";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${outfit.variable} antialiased`} suppressHydrationWarning>
            <body className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/20">
                <ToastProvider>
                    <Header />
                    {children}
                </ToastProvider>
            </body>
        </html>
    );
}
