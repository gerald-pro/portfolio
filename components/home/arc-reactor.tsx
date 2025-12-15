// components/home/arc-reactor.tsx
"use client";

import React from "react";

type ReactorState = {
  inside: boolean;
  proximity: number;   // 0 = borde / fuera, 1 = centro
  sweepAngle: number;  // deg
};

export function ArcReactor() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [state, setState] = React.useState<ReactorState>({
    inside: false,
    proximity: 0,
    sweepAngle: 0,
  });

  const { inside, proximity, sweepAngle } = state;

  // ============================
  // ROTACIÓN DE ANILLOS
  // ============================
  const [angles, setAngles] = React.useState({
    outer: 0,
    segment: 0,
    middle: 0,
  });

  // ============================
  // TILT + PARALLAX (INERCIA)
  // ============================
  const targetTiltRef = React.useRef({
    tiltX: 0,
    tiltY: 0,
    translateX: 0,
    translateY: 0,
  });

  const currentTiltRef = React.useRef({
    tiltX: 0,
    tiltY: 0,
    translateX: 0,
    translateY: 0,
  });

  // ============================
  // SPEED FACTOR (REACTOR BOOST)
  // ============================
  const targetSpeedFactorRef = React.useRef(1);
  const currentSpeedFactorRef = React.useRef(1);

  // ============================
  // MOUSE MOVE
  // ============================
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = x - cx;
    const dy = y - cy;

    const reactorRadius = Math.min(cx, cy) * 0.85;
    const dist = Math.min(Math.sqrt(dx * dx + dy * dy), reactorRadius);
    const proximity = 1 - dist / reactorRadius;

    let nx = dx / reactorRadius;
    let ny = dy / reactorRadius;
    const len = Math.sqrt(nx * nx + ny * ny) || 1;
    nx /= len;
    ny /= len;

    const tiltStrength = 14;
    const parallaxStrength = 12;

    targetTiltRef.current = {
      tiltX: -ny * tiltStrength,
      tiltY: nx * tiltStrength,
      translateX: nx * parallaxStrength,
      translateY: ny * parallaxStrength,
    };

    targetSpeedFactorRef.current = 1 + proximity * 8;

    setState({
      inside: true,
      proximity,
      sweepAngle: Math.atan2(dy, dx) * (180 / Math.PI) + 90,
    });
  };

  const handleMouseLeave = () => {
    targetSpeedFactorRef.current = 1;

    targetTiltRef.current = {
      tiltX: 0,
      tiltY: 0,
      translateX: 0,
      translateY: 0,
    };

    setState((prev) => ({
      ...prev,
      inside: false,
      proximity: 0,
    }));
  };

  // ============================
  // RAF LOOP (FÍSICA + ROTACIÓN)
  // ============================
  React.useEffect(() => {
    let lastTime = performance.now();
    let rafId: number;

    const tick = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      // --- speed smoothing ---
      const speedTarget = targetSpeedFactorRef.current;
      const speedCurrent = currentSpeedFactorRef.current;
      currentSpeedFactorRef.current +=
        (speedTarget - speedCurrent) * 0.04;

      // --- ring rotation ---
      const outerBaseSpeed = 360 / 60;
      const segmentBaseSpeed = 360 / 45;
      const middleBaseSpeed = 360 / 35;

      setAngles((prev) => ({
        outer:
          (prev.outer +
            outerBaseSpeed *
            currentSpeedFactorRef.current *
            dt) %
          360,
        segment:
          (prev.segment +
            segmentBaseSpeed *
            currentSpeedFactorRef.current *
            dt) %
          360,
        middle:
          (prev.middle -
            middleBaseSpeed *
            currentSpeedFactorRef.current *
            dt +
            360) %
          360,
      }));

      // --- tilt inertia ---
      const lerp = 0.08;

      currentTiltRef.current.tiltX +=
        (targetTiltRef.current.tiltX -
          currentTiltRef.current.tiltX) *
        lerp;

      currentTiltRef.current.tiltY +=
        (targetTiltRef.current.tiltY -
          currentTiltRef.current.tiltY) *
        lerp;

      currentTiltRef.current.translateX +=
        (targetTiltRef.current.translateX -
          currentTiltRef.current.translateX) *
        lerp;

      currentTiltRef.current.translateY +=
        (targetTiltRef.current.translateY -
          currentTiltRef.current.translateY) *
        lerp;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const { tiltX, tiltY, translateX, translateY } =
    currentTiltRef.current;

  const svgTransform = `
    translate3d(${translateX}px, ${translateY}px, 0)
    rotateX(${tiltX}deg)
    rotateY(${tiltY}deg)
  `;


  // ============================
  // GLOW LOGIC
  // ============================
  const coreScale = 1 + proximity * 0.06;
  const coreOpacity = 0.6 + proximity * 0.4;
  const innerRingOpacity = 0.5 + proximity * 0.5;

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
          transformOrigin: "50% 50%",
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
