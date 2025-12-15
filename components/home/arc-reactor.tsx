// components/home/arc-reactor.tsx
"use client";

import React from "react";

type ReactorState = {
  inside: boolean;
  tiltX: number;
  tiltY: number;
  translateX: number;
  translateY: number;
  proximity: number;   // 0 = borde / fuera del reactor, 1 = centro
  sweepAngle: number;  // deg
};

export function ArcReactor() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [state, setState] = React.useState<ReactorState>({
    inside: false,
    tiltX: 0,
    tiltY: 0,
    translateX: 0,
    translateY: 0,
    proximity: 0,
    sweepAngle: 0,
  });

  // Ángulos de los anillos (controlados por JS)
  const [angles, setAngles] = React.useState({
    outer: 0,
    segment: 0,
    middle: 0,
  });

  // Factor de velocidad: target y actual (para suavizar)
  const targetSpeedFactorRef = React.useRef(1);
  const currentSpeedFactorRef = React.useRef(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const dist = Math.sqrt(dx * dx + dy * dy);

    // Radio aproximado del reactor (no todo el SVG)
    const reactorRadius = Math.min(cx, cy) * 0.8;

    const clampedDist = Math.min(dist, reactorRadius);
    const distNorm = clampedDist / reactorRadius; // 0 = centro, 1 = borde

    const proximity = 1 - distNorm; // 1 = centro, 0 = borde / fuera

    // Parallax (normalizado para que no se pase)
    let nx = dx / reactorRadius;
    let ny = dy / reactorRadius;
    const len = Math.sqrt(nx * nx + ny * ny) || 1;
    nx = nx / Math.max(1, len);
    ny = ny / Math.max(1, len);

    const tiltStrength = 12;     // deg
    const parallaxStrength = 10; // px

    const tiltX = -ny * tiltStrength;
    const tiltY = nx * tiltStrength;

    const translateX = nx * parallaxStrength;
    const translateY = ny * parallaxStrength;

    // Ángulo del "energy sweep"
    const sweepAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

    // 🔥 Target de velocidad: base (1) + boost suave según proximidad
    const maxBoost = 10; // 1 ⇒ 2x base en el centro
    const speedFactorTarget = 1 + proximity * maxBoost;
    targetSpeedFactorRef.current = speedFactorTarget;

    setState({
      inside: true,
      tiltX,
      tiltY,
      translateX,
      translateY,
      proximity,
      sweepAngle,
    });
  };

  const handleMouseLeave = () => {
    // Al salir: back to base speed pero suavizado (target = 1)
    targetSpeedFactorRef.current = 1;

    setState((prev) => ({
      ...prev,
      inside: false,
      tiltX: 0,
      tiltY: 0,
      translateX: 0,
      translateY: 0,
      proximity: 0,
      sweepAngle: prev.sweepAngle, // lo dejamos donde estaba
    }));
  };

  // Bucle de animación suave con requestAnimationFrame
  React.useEffect(() => {
    let lastTime = performance.now();
    let rafId: number;

    const tick = (time: number) => {
      const dt = (time - lastTime) / 1000; // segundos
      lastTime = time;

      // Suavizado de la velocidad (lerp)
      const target = targetSpeedFactorRef.current;
      const current = currentSpeedFactorRef.current;
      const smoothing = 0.04; // más pequeño = más suave
      const newCurrent = current + (target - current) * smoothing;
      currentSpeedFactorRef.current = newCurrent;

      // Velocidades base (deg/seg)
      const outerBaseSpeed = 360 / 60; // da 1 vuelta cada 60s
      const segmentBaseSpeed = 360 / 45;
      const middleBaseSpeed = 360 / 35;

      setAngles((prev) => ({
        // igual que antes
        outer: (prev.outer + outerBaseSpeed * newCurrent * dt) % 360,
        segment: (prev.segment + segmentBaseSpeed * newCurrent * dt) % 360,
        // 🔁 anillo interior girando al revés
        middle:
          (prev.middle - middleBaseSpeed * newCurrent * dt + 360) % 360,
      }));

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const { inside, tiltX, tiltY, translateX, translateY, proximity, sweepAngle } =
    state;

  const svgTransform = inside
    ? `translate3d(${translateX}px, ${translateY}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
    : "none";

  // Efectos de glow/pulse basados en proximidad
  const glowIntensity = proximity; // 0..1
  const coreScale = 1 + glowIntensity * 0.06;
  const coreOpacity = 0.6 + glowIntensity * 0.4;
  const innerRingOpacity = 0.5 + glowIntensity * 0.5;

  return (
    <div
      ref={containerRef}
      className="arc-reactor-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        viewBox="0 0 400 400"
        className="arc-reactor-svg"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: svgTransform,
          transformStyle: "preserve-3d",
          // 🔧 origen centrado para que el tilt se vea natural
          transformOrigin: "50% 50%",
          transformBox: "fill-box",
          transition: inside
            ? "transform 80ms ease-out"
            : "transform 200ms ease-out",
        }}
      >
        {/* Gradients & glow */}
        <defs>
          <radialGradient id="glow-gradient">
            <stop offset="0%" stopColor="rgb(56, 189, 248)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgb(6, 182, 212)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="core-glow">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop
              offset="40%"
              stopColor="rgb(224, 242, 254)"
              stopOpacity="0.4"
            />
            <stop
              offset="70%"
              stopColor="rgb(56, 189, 248)"
              stopOpacity="0.2"
            />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="metal-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="30%" stopColor="#1f2937" />
            <stop offset="70%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <filter id="triangle-glow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer metal ring */}
        <g className="outer-metal-ring">
          <circle
            cx="200"
            cy="200"
            r="172"
            fill="none"
            stroke="url(#metal-ring)"
            strokeWidth="18"
            opacity="0.9"
          />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = Number((200 + Math.cos(angle) * 172).toFixed(2));
            const y = Number((200 + Math.sin(angle) * 172).toFixed(2));
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="rgb(148, 163, 184, 0.3)"
                strokeWidth="1"
                opacity="0.9"
              />
            );
          })}
        </g>

        {/* Outer rotating cyan ring - ahora con transform JS */}
        <g
          className="outer-ring"
          style={{ transform: `rotate(${angles.outer}deg)` }}
        >
          <circle
            cx="200"
            cy="200"
            r="145"
            fill="none"
            stroke="rgb(6, 182, 212)"
            strokeWidth="33"
            opacity="0.7"
            filter="url(#glow)"
          />
        </g>

        {/* Segment ring */}
        <g
          className="segment-ring"
          style={{ transform: `rotate(${angles.segment}deg)` }}
        >
          {Array.from({ length: 10 }).map((_, i) => {
            const segmentCount = 10;
            const step = (2 * Math.PI) / segmentCount;
            const angle = i * step;
            const half = step * 0.3;
            const innerR = 130;
            const outerR = 163;

            const ax = 200 + Math.cos(angle - half) * innerR;
            const ay = 200 + Math.sin(angle - half) * innerR;
            const bx = 200 + Math.cos(angle + half) * innerR;
            const by = 200 + Math.sin(angle + half) * innerR;
            const cx = 200 + Math.cos(angle + half * 0.9) * outerR;
            const cy = 200 + Math.sin(angle + half * 0.9) * outerR;
            const dx = 200 + Math.cos(angle - half * 0.9) * outerR;
            const dy = 200 + Math.sin(angle - half * 0.9) * outerR;

            const points = [
              `${ax.toFixed(2)},${ay.toFixed(2)}`,
              `${bx.toFixed(2)},${by.toFixed(2)}`,
              `${cx.toFixed(2)},${cy.toFixed(2)}`,
              `${dx.toFixed(2)},${dy.toFixed(2)}`,
            ].join(" ");

            return (
              <polygon
                key={i}
                points={points}
                fill="rgba(15, 23, 42, 0.9)"
                stroke="rgb(56, 189, 248)"
                strokeWidth="2"
                opacity="0.9"
              />
            );
          })}
        </g>

        {/* Middle rotating ring */}
        <g
          className="middle-ring"
          style={{ transform: `rotate(${angles.middle}deg)` }}
        >
          <circle
            cx="200"
            cy="200"
            r="110"
            fill="none"
            stroke="rgba(15, 23, 42, 0.9)"
            strokeWidth="8"
            opacity="0.9"
          />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = Number((200 + Math.cos(angle) * 110).toFixed(2));
            const y = Number((200 + Math.sin(angle) * 110).toFixed(2));
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2"
                fill="rgb(56, 189, 248)"
                opacity="0.85"
                filter="url(#glow)"
              />
            );
          })}
        </g>

        {/* Inner core ring */}
        <g className="inner-ring">
          <circle
            cx="200"
            cy="200"
            r="101"
            fill="none"
            stroke="rgb(56, 189, 248)"
            strokeWidth="5"
            opacity={innerRingOpacity}
            filter="url(#glow)"
            style={{ transition: "opacity 150ms ease-out" }}
          />
        </g>

        {/* Core */}
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="url(#core-glow)"
          filter="url(#glow)"
          opacity={coreOpacity}
          style={{
            transformOrigin: "200px 200px",
            transform: `scale(${coreScale})`,
            transition: "transform 120ms ease-out, opacity 120ms ease-out",
          }}
        />

        <polygon
          points="286,160 200,278 114,160"
          fill="rgba(248, 250, 252, 0.9)"
          className="center-triangle"
          filter="url(#triangle-glow)"
        />

        <polygon
          points="286,160 200,278 114,160"
          fill="none"
          stroke="rgb(224, 242, 254)"
          strokeWidth="4"
          opacity="0.9"
          filter="url(#glow)"
        />

        {/* Energy sweep follow */}
        <g
          className="energy-sweep"
          style={{
            transform: `rotate(${sweepAngle}deg)`,
            opacity: inside ? 0.95 : 0.4,
          }}
        >
          <line
            x1="200"
            y1="200"
            x2="200"
            y2="40"
            stroke="rgb(224, 242, 254)"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </g>
      </svg>

      <style jsx>{`
        .arc-reactor-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          perspective: 800px;
        }

        .arc-reactor-svg {
          width: 100%;
          height: 100%;
          will-change: transform;
        }

        /* Solo dejamos el transform-origin, la rotación ya va por JS */
        .outer-ring,
        .segment-ring,
        .middle-ring,
        .energy-sweep {
          transform-origin: 200px 200px;
        }

        .inner-ring {
          animation: pulse-ring 2s ease-in-out infinite;
        }

        @keyframes pulse-ring {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .center-triangle {
          animation: electrical-flicker 20s ease-in-out infinite;
        }

        @keyframes electrical-flicker {
          0% {
            opacity: 0.7;
            stroke-width: 18px;
          }
          10% {
            opacity: 0.9;
            stroke-width: 19px;
          }
          15% {
            opacity: 0.5;
            stroke-width: 17px;
          }
          20% {
            opacity: 1;
            stroke-width: 20px;
          }
          25% {
            opacity: 0.6;
            stroke-width: 18px;
          }
          35% {
            opacity: 0.95;
            stroke-width: 19px;
          }
          40% {
            opacity: 0.7;
            stroke-width: 18px;
          }
          60% {
            opacity: 0.85;
            stroke-width: 18.5px;
          }
          65% {
            opacity: 0.5;
            stroke-width: 17.5px;
          }
          70% {
            opacity: 1;
            stroke-width: 20px;
          }
          75% {
            opacity: 0.7;
            stroke-width: 18px;
          }
          85% {
            opacity: 0.9;
            stroke-width: 18.5px;
          }
          90% {
            opacity: 0.6;
            stroke-width: 17.5px;
          }
          100% {
            opacity: 0.7;
            stroke-width: 18px;
          }
        }

        .arc-reactor-container::before {
          content: "";
          position: absolute;
          inset: -20%;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.25) 0%,
            rgba(6, 182, 212, 0.08) 40%,
            transparent 70%
          );
          animation: ambient-glow 4s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ambient-glow {
          0%,
          100% {
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
