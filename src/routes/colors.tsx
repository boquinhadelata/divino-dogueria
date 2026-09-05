import { createFileRoute } from "@tanstack/react-router";
import { ShowcaseShell, Section, Caption } from "../components/showcase/shell";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: "Cores — The Bold One" },
      {
        name: "description",
        content: "Paleta de tokens semânticos e primitivos do design system The Bold One.",
      },
      { property: "og:title", content: "Cores — The Bold One" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Colors,
});

const SEMANTIC: { token: string; className: string; role: string; text?: string }[] = [
  { token: "background", className: "bg-background border-2 border-border", role: "Superfície base da página", text: "text-foreground" },
  { token: "foreground", className: "bg-foreground", role: "Texto e tinta principal", text: "text-background" },
  { token: "primary", className: "bg-primary", role: "Ação primária / destaque", text: "text-primary-foreground" },
  { token: "primary-foreground", className: "bg-primary-foreground border-2 border-border", role: "Texto sobre primary", text: "text-primary" },
  { token: "muted", className: "bg-muted", role: "Superfície secundária", text: "text-muted-foreground" },
  { token: "muted-foreground", className: "bg-muted-foreground", role: "Texto auxiliar", text: "text-background" },
  { token: "accent", className: "bg-accent", role: "Bloco invertido de ênfase", text: "text-accent-foreground" },
  { token: "destructive", className: "bg-destructive", role: "Erro / ação destrutiva", text: "text-primary-foreground" },
  { token: "success", className: "bg-success", role: "Confirmação", text: "text-primary-foreground" },
  { token: "warning", className: "bg-warning", role: "Alerta", text: "text-foreground" },
  { token: "border", className: "bg-border", role: "Bordas grossas estruturais", text: "text-background" },
  { token: "ring", className: "bg-ring", role: "Indicador de foco", text: "text-primary-foreground" },
];

const PRIMITIVES = [
  { token: "brand", className: "bg-brand", role: "Vermelho da marca" },
  { token: "brand-deep", className: "bg-brand-deep", role: "Vermelho profundo (hover)" },
  { token: "paper", className: "bg-paper border-2 border-border", role: "Papel off-white" },
  { token: "ink", className: "bg-ink", role: "Preto tinta" },
];

function Swatch({ token, className, role, text }: { token: string; className: string; role: string; text?: string }) {
  return (
    <div>
      <div className={cn("flex h-28 items-end p-3", className)}>
        <span className={cn("font-display text-caption font-bold uppercase tracking-wider", text)}>
          Aa
        </span>
      </div>
      <Caption>
        {token} — {role}
      </Caption>
    </div>
  );
}

function Colors() {
  return (
    <ShowcaseShell>
      <Section id="semantic" title="Tokens semânticos">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {SEMANTIC.map((s) => (
            <Swatch key={s.token} {...s} />
          ))}
        </div>
      </Section>
      <Section id="primitives" title="Primitivos">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PRIMITIVES.map((s) => (
            <Swatch key={s.token} {...s} />
          ))}
        </div>
      </Section>
    </ShowcaseShell>
  );
}
