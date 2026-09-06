/**
 * THE BOLD ONE — Design System
 *
 * Setup obrigatório no app consumidor:
 * 1. Carregar a fonte Archivo no <head> do documento:
 *    <link rel="preconnect" href="https://fonts.googleapis.com" />
 *    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 *    <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap" rel="stylesheet" />
 * 2. Importar o CSS do tema no ponto de entrada do app, após o Tailwind:
 *    @import "tailwindcss";
 *    @import "./design-system/the-bold-one/styles/theme.css";
 *    (sem o theme.css os tokens bg-primary, text-foreground, shadow-hard etc. não existem)
 * 3. Modo escuro: adicionar a classe `dark` no <html>.
 */

export { Button, buttonVariants, type ButtonProps } from "./components/ui/button";
export { Badge, badgeVariants, type BadgeProps } from "./components/ui/badge";
export {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  cardVariants,
  type CardProps,
} from "./components/ui/card";
export { Input, type InputProps } from "./components/ui/input";
export { Textarea, type TextareaProps } from "./components/ui/textarea";
export { Select, type SelectProps } from "./components/ui/select";
export {
  Heading,
  headingVariants,
  Text,
  textVariants,
  type HeadingProps,
  type TextProps,
} from "./components/ui/typography";
export { Marquee, marqueeVariants, type MarqueeProps } from "./components/ui/marquee";
export { NeonLogo, neonLogoVariants, type NeonLogoProps } from "./components/ui/neon-logo";
export { Navbar, NavbarBrand, NavbarNav, NavbarLink, type NavbarLinkProps } from "./components/ui/navbar";
export { Footer, FooterHeading, FooterNav, FooterLink, FooterLegal } from "./components/ui/footer";
export { cn } from "./lib/utils";
