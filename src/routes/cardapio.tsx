import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Star } from "lucide-react";
import { Heading, Text } from "../components/ui/typography";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Marquee } from "../components/ui/marquee";
import { buttonVariants } from "../components/ui/button";
import { MENU, pedirItemLink, type MenuItem } from "../data/cardapio";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — Divino Dogueria" },
      {
        name: "description",
        content:
          "Cardápio completo da Divino Dogueria: hot dogs gourmet de 30cm, batatas, combos, milkshakes, docinhos e bebidas.",
      },
      { property: "og:title", content: "Cardápio — Divino Dogueria" },
      {
        property: "og:description",
        content: "Hot dogs gourmet de 30cm, batatas, combos, milkshakes e bebidas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cardapio,
});

function DestaqueBadge({ label }: { label: string }) {
  if (label === "Vegetariano") {
    return (
      <Badge variant="outline">
        <Leaf aria-hidden className="size-3" /> {label}
      </Badge>
    );
  }
  if (label === "Edição limitada") {
    return (
      <Badge variant="ink">
        <Flame aria-hidden className="size-3" /> {label}
      </Badge>
    );
  }
  return (
    <Badge variant="pill">
      <Star aria-hidden className="size-3" /> {label}
    </Badge>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Card variant="elevated" padding="none" className="flex h-full flex-col">
      {item.imagem ? (
        <img
          src={item.imagem}
          alt={item.nome}
          loading="lazy"
          className="aspect-[4/3] w-full border-b-2 border-border object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6">
      <CardHeader>
        {item.destaque ? <DestaqueBadge label={item.destaque} /> : null}
        <CardTitle>{item.nome}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{item.descricao}</CardContent>
      <CardFooter className="justify-between">
        <Text size="lead" className="font-display font-black">
          {item.preco}
        </Text>
        <a
          href={pedirItemLink(item)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ size: "sm" })}
        >
          Pedir <ArrowRight aria-hidden />
        </a>
      </CardFooter>
      </div>
    </Card>
  );
}

function Cardapio() {
  return (
    <>
      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h1">
            Cardápio<span className="text-primary">.</span>
          </Heading>
          <Text size="lead" className="mt-6 max-w-2xl">
            Escolheu, mandou no WhatsApp, chegou. Todo item abre a conversa com o pedido pronto.
          </Text>
          <nav className="mt-8 flex flex-wrap gap-3">
            {MENU.map((g) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="border-2 border-border px-4 py-2 font-display text-caption font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              >
                {g.categoria}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <Marquee items={["Feito na hora", "Delivery", "Hot dog 30cm", "Divino"]} variant="brand" />

      {MENU.map((grupo) => (
        <section
          key={grupo.slug}
          id={grupo.slug}
          className="scroll-mt-32 border-b-2 border-border px-6 py-14"
        >
          <div className="mx-auto max-w-6xl">
            <div className="flex items-baseline gap-4">
              <Heading level="h2">{grupo.categoria}</Heading>
              <Text size="caption" tone="muted">
                {grupo.itens.length} {grupo.itens.length === 1 ? "item" : "itens"}
              </Text>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {grupo.itens.map((item) => (
                <MenuItemCard key={item.nome} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
