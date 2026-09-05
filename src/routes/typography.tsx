import { createFileRoute } from "@tanstack/react-router";
import { ShowcaseShell, Section, Caption } from "../components/showcase/shell";
import { Heading } from "../components/ui/typography";
import { Text } from "../components/ui/typography";

export const Route = createFileRoute("/typography")({
  head: () => ({
    meta: [
      { title: "Tipografia — The Bold One" },
      {
        name: "description",
        content: "Escala tipográfica e famílias de fontes do design system The Bold One.",
      },
      { property: "og:title", content: "Tipografia — The Bold One" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Typography,
});

const SCALE = [
  { token: "display", className: "text-display", sample: "Sabor sem filtro" },
  { token: "h1", className: "text-h1", sample: "Feito na chapa" },
  { token: "h2", className: "text-h2", sample: "Pão brioche da casa" },
  { token: "h3", className: "text-h3", sample: "Blend 180g" },
  { token: "h4", className: "text-h4", sample: "Maionese defumada" },
] as const;

function Typography() {
  return (
    <ShowcaseShell>
      <Section id="family" title="Família">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-2 border-border p-8">
            <p className="font-display text-h3 font-black uppercase tracking-tight">Archivo</p>
            <p className="mt-3 text-body leading-relaxed text-muted-foreground">
              Família única para display e corpo. Pesos 400–900 com eixo de
              largura. Display usa 800–900 em caixa alta; corpo usa 400–500.
            </p>
            <Caption>--font-display / --font-sans</Caption>
          </div>
          <div className="border-2 border-border p-8">
            <p className="text-body leading-relaxed">
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
              0123456789 — àéíóúç!?&
            </p>
            <p className="mt-4 font-display text-lead font-black uppercase tracking-tight">
              A rápida raposa marrom pula sobre o cão preguiçoso
            </p>
            <Caption>Amostra de caracteres</Caption>
          </div>
        </div>
      </Section>

      <Section id="scale" title="Escala de títulos">
        <div className="flex flex-col gap-10">
          {SCALE.map((s) => (
            <div key={s.token}>
              <Heading level={s.token}>{s.sample}</Heading>
              <Caption>Heading level="{s.token}" · text-{s.token}</Caption>
            </div>
          ))}
        </div>
      </Section>

      <Section id="text" title="Texto corrido">
        <div className="flex max-w-2xl flex-col gap-8">
          <div>
            <Text size="lead">
              Lead — o hambúrguer chega à mesa ainda chiando, com queijo
              derretendo pelas bordas do pão tostado na manteiga.
            </Text>
            <Caption>Text size="lead"</Caption>
          </div>
          <div>
            <Text size="body">
              Body — cada blend é moído diariamente, temperado só com sal e
              pimenta, e vai para a chapa em fogo alto para selar a crosta.
            </Text>
            <Caption>Text size="body"</Caption>
          </div>
          <div>
            <Text size="body" tone="muted">
              Body muted — informações de apoio, horários, notas de rodapé e
              descrições secundárias.
            </Text>
            <Caption>Text size="body" tone="muted"</Caption>
          </div>
          <div>
            <Text size="caption" tone="brand">
              Caption brand — etiquetas, selos e microcopy de destaque
            </Text>
            <Caption>Text size="caption" tone="brand"</Caption>
          </div>
        </div>
      </Section>
    </ShowcaseShell>
  );
}
