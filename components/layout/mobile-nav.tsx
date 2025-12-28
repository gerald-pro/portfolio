"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 backdrop-blur-sm bg-primary-950/65"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-50 w-full max-w-sm backdrop-blur-md border-l-2 neon-border-cyan shadow-xl"
                    >
                        {/* CONTENEDOR PRINCIPAL */}
                        <div className="flex flex-col h-full bg-primary-950">

                            {/* HEADER */}
                            <div className="flex items-center justify-between p-6 border-b border-cyber-cyan/20">
                                <span className="text-sm font-bold tracking-tight text-cyber-cyan font-heading">
                                    {siteConfig.name.toUpperCase()}
                                </span>

                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-sm border border-cyber-cyan/30 text-cyber-cyan hover:bg-primary-500 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            {/* NAV – OCUPA TODO EL ESPACIO */}
                            <nav className="flex-1 overflow-y-auto flex flex-col gap-4 p-8">
                                {siteConfig.mainNav.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="group flex items-center justify-between py-4 border-b border-cyber-cyan/10 text-lg font-mono uppercase tracking-wider text-slate-300 hover:text-primary-500 transition-colors"
                                        >
                                            <span>{item.label}</span>
                                            <span className="text-xs text-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                                [ ACCESS_ACCEPTED ]
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* FOOTER – SIEMPRE ABAJO */}
                            <div className="p-8 border-t border-cyber-cyan/20 bg-cyber-cyan/5">
                                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">
                                    System Status: Ready
                                </div>

                                <div className="flex gap-4">
                                    {Object.entries(siteConfig.links).map(([key, value]) => (
                                        <Link
                                            key={key}
                                            href={value}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-mono uppercase text-slate-400 hover:text-cyber-cyan transition-colors"
                                        >
                                            {key}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    );
}
