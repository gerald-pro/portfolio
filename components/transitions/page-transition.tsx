"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                    initial: {
                        opacity: 0,
                    },
                    animate: {
                        opacity: 1,
                    },
                    exit: {
                        opacity: 0,
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                {/* Glitch overlay on exit/enter */}
                <motion.div
                    className="fixed inset-0 z-50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Chromatic aberration layers */}
                    <div className="glitch-layer glitch-layer-red" />
                    <div className="glitch-layer glitch-layer-green" />
                    <div className="glitch-layer glitch-layer-blue" />

                    {/* Scan line effect */}
                    <motion.div
                        className="absolute left-0 right-0 h-1 bg-primary-400"
                        style={{
                            boxShadow: "0 0 20px rgba(3, 163, 188, 0.8)",
                        }}
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{
                            duration: 0.5,
                            ease: "linear",
                            delay: 0.1,
                        }}
                    />
                </motion.div>

                {/* Page content */}
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
