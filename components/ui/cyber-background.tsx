import React from "react";

export function CyberBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* Base Dark Layer */}
            <div className="absolute inset-0 bg-surface-950" />

            {/* Cyber Grid - Low Opacity */}
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />

            {/* Radial Gradient mainly for center highlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(2,127,147,0.2),transparent_70%)]" />

            {/* Scanlines Pattern - Normal blend for visibility */}
            <div className="absolute inset-0 bg-scanlines opacity-50" />

            {/* Vignette for CRT feel */}
            <div className="absolute inset-0 bg-vignette" />

            {/* Digital Noise Texture */}
            <div className="absolute inset-0 bg-noise" />

            {/* Subtle Glitch/Color Separation Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-red-500/5 animate-pulse opacity-20 mix-blend-color-dodge" />
        </div>
    );
}
