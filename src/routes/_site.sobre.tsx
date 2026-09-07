import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Heading, Text } from "../components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Marquee } from "../components/ui/marquee";
import { buttonVariants } from "../components/ui/button";
import { BrandLogo } from "../components/ui/brand-logo";
import loja from "../assets/loja.jpg";
import heroDog from "../assets/produtos/hotdog-divino.jpg";
import fritas from "../assets/produtos/fritas.jpg";
import milkshake from "../assets/produtos/milkshake-choco-oreo.jpg";

export const Route = createFileRoute("/_site/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Divino Dogueria" },
      {
        name: "description",
        content:
          "A história da Divino Dogueria: dogão de 30cm feito na hora, ingredientes fartos e molhos da casa.",
      },
      { property: "og:title", content: "Sobre — Divino Dogueria" },
      {
        property: "og:description",
        content: "Dogão de 30cm feito na hora, ingredientes fartos e molhos da casa.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

const PILARES = [
  {
    titulo: "Pão de 30cm",
    texto: "Nada de dogão apertado. O pão é longo e aguenta o recheio inteiro sem desmontar.",
  },
  {
    titulo: "Molhos da casa",
    texto: "A maionese Divino e o molho Divino são feitos aqui. É o que ninguém consegue copiar.",
  },
  {
    titulo: "Feito na hora",
    texto: "Cada pedido monta na chapa quando entra. Sai quente, sai crocante.",
  },
];

function Sobre() {
  return (
    <>
      <section className="border-b-2 border-border bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
          <BrandLogo variant="bare" className="h-64 md:h-80" alt="Logo Divino Dogueria" />
          <p className="mt-6 max-w-xl text-lead leading-relaxed text-primary-foreground/90">
            A Divino Dogueria nasceu de uma ideia simples: hot dog não precisa ser lanche pequeno.
            Aqui ele é prato principal, com recheio até a última mordida.
          </p>
        </div>
      </section>

      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h2">
            A casa do dogão<span className="text-primary">.</span>
          </Heading>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <img
          src={loja}
          alt="Balcão da Divino Dogueria com parede vermelha e atendimento na chapa"
          loading="lazy"
          className="h-[420px] w-full object-cover"
        />
      </section>

      <Marquee items={["Feito na hora", "Recheio farto", "Molhos da casa"]} variant="ink" />

      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {PILARES.map((p) => (
            <Card key={p.titulo} variant="flat" padding="lg">
              <CardHeader>
                <CardTitle>{p.titulo}</CardTitle>
              </CardHeader>
              <CardContent>{p.texto}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h2">Na chapa</Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { src: heroDog, alt: "Hot dog de 30cm com carne desfiada e cheddar" },
              { src: fritas, alt: "Batata frita com cheddar e bacon" },
              { src: milkshake, alt: "Milkshake de doce de leite com farofa de paçoca" },
            ].map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-square w-full border-2 border-border object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <Heading level="h3">
          Bateu a fome<span className="text-primary">?</span>
        </Heading>
        <Link to="/cardapio" className={`mt-8 ${buttonVariants({ size: "lg" })}`}>
          Ver cardápio <ArrowRight aria-hidden />
        </Link>
      </section>
    </>
  );
}
