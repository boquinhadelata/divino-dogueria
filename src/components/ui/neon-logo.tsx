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
      /** Apagado: traço cinza sem brilho. */
      off: "text-[#3a3a3a]",
    },
    size: {
      sm: "w-40",
      md: "w-64",
      lg: "w-[22rem] max-w-full",
    },
    layout: {
      /** Coroa + dog + palavras empilhadas. */
      stacked: "",
      /** Símbolo à esquerda, palavras em uma linha — para cabeçalhos. */
      inline: "h-8 w-auto",
    },
  },
  defaultVariants: { variant: "on", size: "md", layout: "stacked" },
});

export interface NeonLogoProps
  extends Omit<React.SVGProps<SVGSVGElement>, "children">,
    VariantProps<typeof neonLogoVariants> {
  /** Liga a animação de piscar ao entrar na tela. */
  flicker?: boolean;
}

export function NeonLogo({
  variant = "on",
  size,
  layout = "stacked",
  flicker = true,
  className,
  ...props
}: NeonLogoProps) {
  const v = variant ?? "on";
  const l = layout ?? "stacked";
  const glow = v === "off" ? undefined : v === "red" ? "var(--glow-neon-red)" : "var(--glow-neon-white)";
  const redClass = v === "off" ? "text-[#3a3a3a]" : "text-primary";
  const redGlow = v === "off" ? undefined : "var(--glow-neon-red)";
  const textRed = v === "off" ? undefined : "drop-shadow(0 0 2px currentColor) drop-shadow(0 0 8px var(--red)) drop-shadow(0 0 20px var(--red-deep))";
  const textWhite = v === "off" ? undefined : v === "red" ? textRed : "drop-shadow(0 0 2px currentColor) drop-shadow(0 0 8px #7fb4ff) drop-shadow(0 0 20px #4a86e8)";

  const dog = (
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
  );

  const crown = (
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
  );

  if (l === "inline") {
    return (
      <svg
        viewBox="0 0 460 120"
        role="img"
        aria-label="Divino Dogueria"
        {...props}
        className={cn(neonLogoVariants({ variant: v, layout: l }), flicker && "animate-neon-flicker", className)}
      >
        <g transform="translate(12,10) scale(0.4) translate(-95,-10)">
          {crown}
          {dog}
        </g>
        <text
          x="112"
          y="76"
          fontFamily="var(--font-display)"
          fontWeight={900}
          fontSize={30}
          letterSpacing={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          style={textWhite ? { filter: textWhite } : undefined}
        >
          DIVINO DOGUERIA
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 300"
      role="img"
      aria-label="Divino Dogueria"
      {...props}
      className={cn(neonLogoVariants({ variant: v, size, layout: l }), flicker && "animate-neon-flicker", className)}
    >
      {crown}
      {dog}

      <text
        x="120"
        y="206"
        textAnchor="middle"
        className={redClass}
        fontFamily="var(--font-display)"
        fontWeight={900}
        fontSize={62}
        letterSpacing={2}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        style={textRed ? { filter: textRed } : undefined}
      >
        DIVINO
      </text>

      <text
        x="120"
        y="272"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontWeight={900}
        fontSize={43}
        letterSpacing={4}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        style={textWhite ? { filter: textWhite } : undefined}
      >
        DOGUERIA
      </text>
    </svg>
  );
}
