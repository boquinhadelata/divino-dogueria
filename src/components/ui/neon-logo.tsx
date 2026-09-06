import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * NEON LOGO — letreiro da Divino Dogueria
 *
 * Cachorro-quente com coroa + lettering em traço de neon, recriando a
 * referência de vídeo enviada pela loja (sem usar o arquivo de vídeo).
 * Glow via camadas de drop-shadow; piscar de tubo de neon via
 * --animate-neon-flicker (desligado em prefers-reduced-motion).
 */

export const neonLogoVariants = cva("inline-flex select-none", {
  variants: {
    variant: {
      /** Vermelho + branco azulado, como a referência. */
      on: "text-[#bcd8ff]",
      /** Tudo no vermelho da marca. */
      red: "text-primary",
      /** Apagado: traço cinza sem brilho (acende com .group:hover). */
      off: "text-[#3a3a3a]",
    },
    size: {
      sm: "w-44",
      md: "w-72",
      lg: "w-[22rem] max-w-full",
    },
  },
  defaultVariants: { variant: "on", size: "md" },
});

export interface NeonLogoProps
  extends Omit<React.SVGProps<SVGSVGElement>, "children">,
    VariantProps<typeof neonLogoVariants> {
  /** Liga a animação de piscar ao entrar na tela. */
  flicker?: boolean;
}

const GLOW: Record<string, string | undefined> = {
  on: "var(--glow-neon-white)",
  red: "var(--glow-neon-red)",
  off: undefined,
};

export function NeonLogo({ variant = "on", size, flicker = true, className, ...props }: NeonLogoProps) {
  const v = variant ?? "on";
  const glow = GLOW[v];
  const redClass = v === "off" ? "text-[#3a3a3a]" : "text-primary";
  const redGlow = v === "off" ? undefined : "var(--glow-neon-red)";

  return (
    <svg
      viewBox="0 0 240 300"
      role="img"
      aria-label="Divino Dogueria"
      {...props}
      className={cn(neonLogoVariants({ variant: v, size }), flicker && "animate-neon-flicker", className)}
    >
      {/* Coroa */}
      <g
        className={redClass}
        stroke="currentColor"
        strokeWidth={7}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        style={redGlow ? { filter: redGlow } : undefined}
      >
        <path d="M95 46 L90 18 L110 34 L120 10 L130 34 L150 18 L145 46 Z" />
      </g>

      {/* Cachorro-quente */}
      <g
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
        style={glow ? { filter: glow } : undefined}
      >
        <path d="M60 76 Q120 52 180 76" />
        <path d="M58 96 Q70 84 84 94 Q96 103 108 94 Q120 85 132 94 Q144 103 156 94 Q168 85 182 96" />
        <path d="M60 116 Q120 138 180 116" />
      </g>

      {/* DIVINO */}
      <text
        x="120"
        y="206"
        textAnchor="middle"
        className={redClass}
        fontFamily="var(--font-display)"
        fontWeight={900}
        fontSize={64}
        letterSpacing={2}
        fill="currentColor"
        style={redGlow ? { filter: redGlow } : undefined}
      >
        DIVINO
      </text>

      {/* DOGUERIA */}
      <text
        x="120"
        y="272"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight={900}
        fontSize={44}
        letterSpacing={4}
        fill="currentColor"
        style={glow ? { filter: glow } : undefined}
      >
        DOGUERIA
      </text>
    </svg>
  );
}
