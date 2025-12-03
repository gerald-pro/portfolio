// components/home/arc-reactor.tsx
"use client";

export function ArcReactor() {
    return (
        <div className="arc-reactor-container">
            <svg
                viewBox="0 0 400 400"
                className="arc-reactor-svg"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Outer glow */}
                <defs>
                    <radialGradient id="glow-gradient">
                        <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
                    </radialGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background glow circle */}
                <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="url(#glow-gradient)"
                    className="glow-circle"
                />

                {/* Outer rotating ring */}
                <g className="outer-ring">
                    <circle
                        cx="200"
                        cy="200"
                        r="160"
                        fill="none"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="20"
                        opacity="0.6"
                        filter="url(#glow)"
                    />
                    {/* Radial lines on outer ring */}
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x1 = 200 + Math.cos(angle) * 150;
                        const y1 = 200 + Math.sin(angle) * 150;
                        const x2 = 200 + Math.cos(angle) * 160;
                        const y2 = 200 + Math.sin(angle) * 160;
                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="rgb(6, 182, 212)"
                                strokeWidth="2"
                                opacity="0.8"
                            />
                        );
                    })}
                </g>

                {/* Middle rotating ring */}
                <g className="middle-ring">
                    <circle
                        cx="200"
                        cy="200"
                        r="120"
                        fill="none"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="10"
                        opacity="0.5"
                        filter="url(#glow)"
                    />
                    {/* Rectangular segments - magnetic coil style */}
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 45 * Math.PI) / 180;
                        const x = 200 + Math.cos(angle) * 120;
                        const y = 200 + Math.sin(angle) * 120;
                        return (
                            <rect
                                key={i}
                                x={x - 6}
                                y={y - 3}
                                width="12"
                                height="12"
                                fill="rgb(6, 182, 212)"
                                opacity="0.8"
                                transform={`rotate(${(i * 45)}, ${x}, ${y})`}
                            />
                        );
                    })}
                </g>

                {/* Inner core ring - rendered before triangle to appear behind */}
                <g className="inner-ring">
                    <circle
                        cx="200"
                        cy="200"
                        r="80"
                        fill="none"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="1"
                        opacity="0.7"
                        filter="url(#glow)"
                    />
                </g>

                {/* Center core triangle */}
                <polygon
                    points="300,145 200,300 100,145" // Triángulo equilátero
                    fill="rgba(6, 182, 212, 0.6)"   // Relleno semi-transparente
                    stroke="rgb(6, 182, 212)"       // Color del borde
                    strokeWidth="30"                  // Grosor base
                    className="center-triangle"      // Clase CSS para animación
                    filter="url(#glow)"               // Efecto de brillo
                />

                {/* Energy sweep effect */}
                <g className="energy-sweep">
                    <line
                        key="energy-sweep"
                        x1="200"
                        y1="200"
                        x2="200"
                        y2="40"
                        stroke="rgb(6, 182, 212)"
                        strokeWidth="3"
                        opacity="0.6"
                        filter="url(#glow)"
                    />
                </g>

                {/* Flash points */}
                {Array.from({ length: 4 }).map((_, i) => {
                    const angle = (i * 90 * Math.PI) / 180;
                    const x = 200 + Math.cos(angle) * 140;
                    const y = 200 + Math.sin(angle) * 140;
                    return (
                        <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="3"
                            fill="rgb(6, 182, 212)"
                            className={`flash-point flash-${i}`}
                            filter="url(#glow)"
                        />
                    );
                })}
            </svg>

            <style jsx>{`
                .arc-reactor-container {
                    position: relative;
                    width: 100%;
                    max-width: 400px;
                    aspect-ratio: 1;
                }

                .arc-reactor-svg {
                    width: 100%;
                    height: 100%;
                }

                /* Pulsing glow animation */
                .glow-circle {
                    animation: pulse-glow 3s ease-in-out infinite;
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.05);
                    }
                }

                /* Outer ring rotation - slow */
                .outer-ring {
                    animation: rotate-slow 60s linear infinite;
                    transform-origin: 200px 200px;
                }

                @keyframes rotate-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Middle ring rotation - medium speed, opposite direction */
                .middle-ring {
                    animation: rotate-medium 40s linear infinite reverse;
                    transform-origin: 200px 200px;
                }

                @keyframes rotate-medium {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* Inner ring subtle pulse */
                .inner-ring {
                    animation: pulse-ring 2s ease-in-out infinite;
                }

                @keyframes pulse-ring {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                /* Core structure pulse */
                .core-structure {
                    animation: pulse-core 1.5s ease-in-out infinite;
                }

                @keyframes pulse-core {
                    0%, 100% {
                        opacity: 0.7;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                /* Center triangle electrical flickering effect */
                .center-triangle {
                    animation: electrical-flicker 2s ease-in-out infinite;
                }

                @keyframes electrical-flicker {
                    0% {
                        opacity: 0.7;
                        stroke-width: 3px;
                    }
                    10% {
                        opacity: 0.9;
                        stroke-width: 3.5px;
                    }
                    15% {
                        opacity: 0.5;
                        stroke-width: 2.5px;
                    }
                    20% {
                        opacity: 1;
                        stroke-width: 4px;
                    }
                    25% {
                        opacity: 0.6;
                        stroke-width: 3px;
                    }
                    35% {
                        opacity: 0.95;
                        stroke-width: 3.5px;
                    }
                    40% {
                        opacity: 0.7;
                        stroke-width: 3px;
                    }
                    60% {
                        opacity: 0.85;
                        stroke-width: 3.2px;
                    }
                    65% {
                        opacity: 0.5;
                        stroke-width: 2.8px;
                    }
                    70% {
                        opacity: 1;
                        stroke-width: 4px;
                    }
                    75% {
                        opacity: 0.7;
                        stroke-width: 3px;
                    }
                    85% {
                        opacity: 0.9;
                        stroke-width: 3.3px;
                    }
                    90% {
                        opacity: 0.6;
                        stroke-width: 2.7px;
                    }
                    100% {
                        opacity: 0.7;
                        stroke-width: 3px;
                    }
                }

                /* Energy sweep - rotating highlight */
                .energy-sweep {
                    animation: sweep 8s linear infinite;
                    transform-origin: 200px 200px;
                }

                @keyframes sweep {
                    from {
                        transform: rotate(0deg);
                        opacity: 0.3;
                    }
                    to {
                        transform: rotate(360deg);
                        opacity: 0.8;
                    }
                }

                /* Flash points - random flashing */
                .flash-point {
                    animation: flash 4s ease-in-out infinite;
                }

                .flash-0 {
                    animation-delay: 0s;
                }

                .flash-1 {
                    animation-delay: 1s;
                }

                .flash-2 {
                    animation-delay: 2s;
                }

                .flash-3 {
                    animation-delay: 3s;
                }

                @keyframes flash {
                    0%, 90%, 100% {
                        opacity: 0.2;
                        r: 3px;
                    }
                    93% {
                        opacity: 1;
                        r: 5px;
                    }
                    96% {
                        opacity: 0.2;
                        r: 3px;
                    }
                }

                /* Overall container glow effect */
                .arc-reactor-container::before {
                    content: '';
                    position: absolute;
                    inset: -20%;
                    background: radial-gradient(
                        circle,
                        rgba(6, 182, 212, 0.15) 0%,
                        rgba(6, 182, 212, 0.05) 40%,
                        transparent 70%
                    );
                    animation: ambient-glow 4s ease-in-out infinite;
                    pointer-events: none;
                }

                @keyframes ambient-glow {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}
