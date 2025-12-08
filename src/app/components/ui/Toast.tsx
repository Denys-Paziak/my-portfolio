"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import * as React from "react";

// Types
type ToastType = "success" | "error" | "info";

interface Toast {
    id: string;
    type: ToastType;
    title?: string;
    message: string;
}

interface ToastContextType {
    toast: (props: Omit<Toast, "id">) => void;
}

// Context
const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

// Provider
export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<Toast[]>([]);

    const toast = React.useCallback(({ type, title, message }: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, type, title, message }]);

        // Auto dismiss
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 5000);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const contextValue = React.useMemo(() => ({ toast }), [toast]);

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <div className="fixed bottom-0 right-0 z-[100] p-6 flex flex-col gap-2 w-full max-w-md pointer-events-none">
                <AnimatePresence mode="popLayout">
                    {toasts.map((t) => (
                        <ToastItem key={t.id} toast={t} onRemove={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

// Hook
export function useToast() {
    const context = React.useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}

// Component
function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" aria-hidden="true" />,
        error: <AlertCircle className="w-5 h-5 text-red-500" aria-hidden="true" />,
        info: <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />,
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto w-full bg-[#0A0B0D] border border-[var(--glass-border)] rounded-xl p-4 shadow-2xl flex items-start gap-4"
        >
            <div className="mt-0.5">{icons[toast.type]}</div>
            <div className="flex-1">
                {toast.title ? (
                    <h4 className="text-sm font-medium text-foreground mb-1">{toast.title}</h4>
                ) : null}
                <p className="text-sm text-muted-foreground leading-relaxed">{toast.message}</p>
            </div>
            <button
                onClick={() => onRemove(toast.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
            >
                <X className="w-4 h-4" aria-hidden="true" />
            </button>
        </motion.div>
    );
}
