import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ShowcaseShell } from "../components/showcase/shell";
import { Marquee } from "../components/ui/marquee";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Bold One — Design System" },
      {
        name: "description",
        content:
          "Design system gráfico e editorial: vermelho vibrante, tipografia gigante em caixa alta, cantos retos e bordas grossas.",
      },
      { property: "og:title", content: "The Bold One — Design System" },
      {
        property: "og:description",
        content:
          "Design system gráfico e editorial: vermelho vibrante, tipografia gigante em caixa alta, cantos retos e bordas grossas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Overview,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Tipografia é o layout",
    text: "Headlines gigantes em caixa alta carregam a página. Uma frase grande vale mais que um parágrafo.",
  },
  {
    n: "02",
    title: "Blocos, não cartões",
    text: "Superfícies retas com bordas grossas e sombra sólida deslocada. Nada de blur ou cantos arredondados.",
  },
  {
    n: "03",
    title: "Vermelho é ação",
    text: "O primário aparece em CTAs, destaques e seleção. Cor plana, sem gradientes, sem timidez.",
  },
];

function Overview() {
  return (
    <ShowcaseShell>
      <section className="border-b-2 border-border px-6 py-20">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="solid">v0.1</Badge>
          <Badge variant="outline">Tailwind v4</Badge>
          <Badge variant="pill">React 19</Badge>
        </div>
        <h1 className="mt-8 font-display text-display font-black uppercase leading-[0.9] tracking-tight">
          The Bold
          <br />
          One<span className="text-primary">.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lead leading-relaxed text-muted-foreground">
          Um design system gráfico e editorial: vermelho vibrante sobre papel,
          tipografia gigante, cantos retos e bordas grossas. Feito para marcas
          com opinião.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/components">
            <Button size="lg">
              Ver componentes <ArrowRight aria-hidden />
            </Button>
          </Link>
          <Link to="/colors">
            <Button size="lg" variant="secondary">
              Explorar tokens
            </Button>
          </Link>
        </div>
      </section>

      <Marquee
        size="lg"
        items={["Design System", "Tokens", "Componentes", "Cantos Retos", "Caixa Alta"]}
      />

      <section className="grid border-b-2 border-border md:grid-cols-3">
        {PRINCIPLES.map((p) => (
          <article
            key={p.n}
            className="border-b-2 border-border p-10 last:border-b-0 md:border-b-0 md:border-r-2 md:last:border-r-0"
          >
            <p className="font-display text-h3 font-black text-primary">{p.n}</p>
            <h2 className="mt-4 font-display text-h4 font-black uppercase tracking-tight">
              {p.title}
            </h2>
            <p className="mt-3 text-body leading-relaxed text-muted-foreground">{p.text}</p>
          </article>
        ))}
      </section>
    </ShowcaseShell>
  );
}
