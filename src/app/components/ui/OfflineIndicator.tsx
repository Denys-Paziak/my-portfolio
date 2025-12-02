"use client";

import * as React from "react";
import { WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function OfflineIndicator() {
    const [isOffline, setIsOffline] = React.useState(false);

    React.useEffect(() => {
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Initial check
        setIsOffline(!navigator.onLine);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    if (!isOffline) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
            <div className="flex items-center gap-3 px-4 py-3 bg-red-500/10 border border-red-500/20 backdrop-blur-md rounded-lg text-red-500 shadow-2xl">
                <WifiOff className="w-5 h-5" />
                <span className="text-sm font-medium">You are currently offline</span>
            </div>
        </div>
    );
}
