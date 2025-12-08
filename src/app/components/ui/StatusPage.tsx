import { AlertCircle, CheckCircle, WifiOff } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface StatusPageProps {
    type: "404" | "500" | "success" | "offline";
    title?: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}

export function StatusPage({ type, title, description, action, className }: StatusPageProps) {
    const config = {
        "404": {
            icon: AlertCircle,
            defaultTitle: "Page Not Found",
            defaultDesc: "The page you are looking for doesn't exist or has been moved.",
            color: "text-yellow-500",
        },
        "500": {
            icon: AlertCircle,
            defaultTitle: "Server Error",
            defaultDesc: "Something went wrong on our end. Please try again later.",
            color: "text-red-500",
        },
        success: {
            icon: CheckCircle,
            defaultTitle: "Success!",
            defaultDesc: "Your action has been completed successfully.",
            color: "text-green-500",
        },
        offline: {
            icon: WifiOff,
            defaultTitle: "You are offline",
            defaultDesc: "Please check your internet connection.",
            color: "text-muted-foreground",
        },
    };

    const { icon: Icon, defaultTitle, defaultDesc, color } = config[type];

    return (
        <div
            className={cn(
                "min-h-[60vh] flex flex-col items-center justify-center text-center p-6",
                className
            )}
        >
            <div
                className={cn(
                    "w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 animate-fade-in",
                    color
                )}
            >
                <Icon className="w-12 h-12" />
            </div>
            <Heading level={1} className="mb-4 animate-fade-in delay-100">
                {title || defaultTitle}
            </Heading>
            <Text variant="muted" className="max-w-md mb-8 animate-fade-in delay-200">
                {description || defaultDesc}
            </Text>
            <div className="animate-fade-in delay-300">
                {action || (
                    <Link href="/">
                        <Button variant="primary">Return Home</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
