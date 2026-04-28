"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

// Padrão decorativo tom-sobre-tom: vermelho profundo (#8B0E1F) sobre vermelho
// principal (#C8102E). aria-hidden — é puramente decorativo.
//
// Composto por:
//  - Margaridas estilizadas (5–6 pétalas arredondadas)
//  - Folhas alongadas em ramos
//  - Espirais arabesco preenchendo vazios

function Daisy({
  cx,
  cy,
  r = 22,
  rotate = 0,
}: {
  cx: number;
  cy: number;
  r?: number;
  rotate?: number;
}) {
  const petals = Array.from({ length: 6 });
  return (
    <g transform={`rotate(${rotate} ${cx} ${cy})`}>
      {petals.map((_, i) => {
        const angle = (i * 360) / petals.length;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy - r * 0.85}
            rx={r * 0.42}
            ry={r * 0.85}
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.32} />
    </g>
  );
}

function Leaf({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
}) {
  return (
    <path
      d="M0,0 C18,-8 38,-8 56,0 C38,8 18,8 0,0 Z"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

function Spiral({
  x,
  y,
  rotate = 0,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate?: number;
  scale?: number;
}) {
  return (
    <path
      d="M0,0 C12,-14 32,-14 36,2 C40,18 22,28 8,22 C-4,17 -4,4 6,2 C14,0 18,8 14,12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
    />
  );
}

function Stem({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  );
}

export function FloralPattern({
  className,
  colorClassName = "text-brand-red-deep",
  opacity = 0.22,
  parallax = true,
}: {
  className?: string;
  colorClassName?: string;
  opacity?: number;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <motion.div
        style={parallax && !reduced ? { y } : undefined}
        className="absolute inset-0"
      >
        <svg
          viewBox="0 0 1200 900"
          width="100%"
          height="110%"
          preserveAspectRatio="xMidYMid slice"
          className={colorClassName}
          style={{ opacity }}
        >
          <g fill="currentColor" stroke="none">
            {/* ramo superior esquerdo */}
            <Stem d="M-20,140 C140,80 280,180 420,120 C520,80 600,150 720,90" />
            <Daisy cx={120} cy={120} r={28} rotate={12} />
            <Leaf x={210} y={150} rotate={-20} scale={0.9} />
            <Daisy cx={340} cy={150} r={20} rotate={-30} />
            <Leaf x={460} y={120} rotate={20} scale={1.1} />
            <Daisy cx={620} cy={110} r={24} rotate={45} />

            {/* meio diagonal */}
            <Stem d="M80,420 C220,360 360,500 540,420 C700,350 820,460 980,380" />
            <Daisy cx={180} cy={400} r={22} rotate={0} />
            <Leaf x={300} y={440} rotate={-10} scale={1} />
            <Leaf x={420} y={420} rotate={30} scale={0.8} />
            <Daisy cx={560} cy={420} r={30} rotate={20} />
            <Leaf x={720} y={400} rotate={-25} scale={1.1} />
            <Daisy cx={880} cy={380} r={18} rotate={-15} />

            {/* canto inferior direito */}
            <Stem d="M520,800 C660,740 780,820 920,760 C1040,720 1140,800 1240,760" />
            <Daisy cx={620} cy={760} r={26} rotate={30} />
            <Leaf x={760} y={780} rotate={15} scale={1} />
            <Daisy cx={900} cy={730} r={20} rotate={-20} />
            <Leaf x={1020} y={770} rotate={-30} scale={1.2} />
            <Daisy cx={1140} cy={740} r={24} rotate={50} />

            {/* dispersos */}
            <Daisy cx={60} cy={680} r={18} rotate={20} />
            <Daisy cx={1080} cy={220} r={22} rotate={-10} />
            <Daisy cx={760} cy={580} r={16} rotate={40} />
            <Daisy cx={260} cy={620} r={14} rotate={0} />
          </g>

          {/* espirais (apenas stroke) */}
          <g>
            <Spiral x={460} y={260} rotate={20} scale={1.2} />
            <Spiral x={820} y={220} rotate={-30} scale={1} />
            <Spiral x={140} y={520} rotate={45} scale={0.9} />
            <Spiral x={1000} y={560} rotate={10} scale={1.1} />
            <Spiral x={380} y={720} rotate={-15} scale={1} />
            <Spiral x={680} y={680} rotate={60} scale={0.8} />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
