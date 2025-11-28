"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const showNext = useCallback(() => {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }, [images.length]);

    const showPrev = useCallback(() => {
        setSelectedIndex((prev) =>
            prev === null ? null : (prev - 1 + images.length) % images.length
        );
    }, [images.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, showNext, showPrev]);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedIndex]);

    if (!images || images.length === 0) return null;

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <Card
                        key={index}
                        className="group relative aspect-video overflow-hidden cursor-pointer border-brand-100 dark:border-brand-800 bg-slate-100 dark:bg-slate-900"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={image}
                            alt={`${title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 drop-shadow-md" />
                        </div>
                    </Card>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                >
                    {/* Close Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 z-50"
                        onClick={closeLightbox}
                    >
                        <X className="h-6 w-6" />
                        <span className="sr-only">Cerrar</span>
                    </Button>

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 hidden md:flex h-12 w-12 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrev();
                                }}
                            >
                                <ChevronLeft className="h-8 w-8" />
                                <span className="sr-only">Anterior</span>
                            </Button>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 z-50 hidden md:flex h-12 w-12 rounded-full"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                            >
                                <ChevronRight className="h-8 w-8" />
                                <span className="sr-only">Siguiente</span>
                            </Button>
                        </>
                    )}

                    {/* Main Image Container */}
                    <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <Image
                                src={images[selectedIndex]}
                                alt={`${title} - Vista completa ${selectedIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                                quality={90}
                            />
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
