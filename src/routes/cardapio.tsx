import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Star } from "lucide-react";
import { ShowcaseShell, Caption } from "../components/showcase/shell";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Heading, Text } from "../components/ui/typography";
import { Marquee } from "../components/ui/marquee";

export const Route = createFileRoute("/cardapio")({
  head: () => ({
    meta: [
      { title: "Cardápio — The Bold One" },
      {
        name: "description",
        content:
          "Exemplo real de cardápio construído com o design system The Bold One: hot dogs gourmet, acompanhamentos, combos e bebidas.",
      },
      { property: "og:title", content: "Cardápio — The Bold One" },
      {
        property: "og:description",
        content: "Exemplo real de cardápio construído com o design system The Bold One.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cardapio,
});

type Item = {
  nome: string;
  preco: string;
  descricao: string;
  destaque?: string;
};

const MENU: { categoria: string; itens: Item[] }[] = [
  {
    categoria: "Hot Dog Gourmet",
    itens: [
      {
        nome: "Cachorro Quente Tradicional",
        preco: "R$ 26,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, uma salsicha, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Cachorro Quente Duplo",
        preco: "R$ 29,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, duas salsichas, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Hot Dog Divino Junior",
        preco: "R$ 22,00",
        descricao:
          "Pão de hot dog (100g), molho de tomate, maionese Divino (contém leite), catchup, 1 salsicha e 3 batatas sorriso.",
      },
      {
        nome: "Hot Dog Calabresa",
        preco: "R$ 31,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, salsicha, calabresa em pedaços, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue), queijo gratinado e tempero verde.",
      },
      {
        nome: "Hot Dog Carne de Panela e Cheddar",
        preco: "R$ 39,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), carne de panela desfiada, molho Divino (contém barbecue), cheddar, farofa de bacon, tempero verde, catchup e batata-palha.",
      },
      {
        nome: "Hot Dog Costela, Mostarda e Mel",
        preco: "R$ 41,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), costela desfiada com molho de mostarda e mel, queijo gratinado, fritas, catchup e tempero verde.",
      },
      {
        nome: "Hot Dog Divino",
        preco: "R$ 44,90",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), calabresa, bacon, carne de panela desfiada, Catupiry, vinagrete, fritas, cheddar, catchup e tempero verde.",
        destaque: "Mais pedido",
      },
      {
        nome: "Hot Dog Doritos",
        preco: "R$ 47,50",
        descricao:
          "Edição Limitada - Pão de hot dog 30cm, molho de tomate, maionese Divino (contém leite), molho Divino (contém Barbecue), catchup, mostarda, duas salsichas, cebola roxa, bacon, calabresa, orégano e Doritos.",
        destaque: "Edição limitada",
      },
      {
        nome: "Hot Dog Vegetariano",
        preco: "R$ 42,00",
        descricao:
          "Pão de hot dog 30cm, molho de tomate, uma Linguiça do Futuro, vinagrete, batata-palha, maionese Divino (contém leite), molho Divino (contém Barbecue e leite), queijo gratinado e tempero verde.",
        destaque: "Vegetariano",
      },
    ],
  },
  {
    categoria: "Para acompanhar",
    itens: [
      { nome: "Fritas", preco: "R$ 22,00", descricao: "300 gramas de batata frita." },
      {
        nome: "Batata Divina",
        preco: "R$ 32,00",
        descricao:
          "300g de batata frita, costela desfiada, molho de catupiry com queijo mussarela e tempero verde.",
        destaque: "Mais pedido",
      },
      {
        nome: "Batata Cheddar e Bacon",
        preco: "R$ 32,00",
        descricao: "300g de batata frita, com molho de cheddar cremoso e cubinhos de bacon por cima.",
      },
      {
        nome: "Batata com Chocolate c/ Ovomaltine ou Bacon Cubinhos",
        preco: "R$ 28,00",
        descricao: "300g de batata frita já salgada, chocolate ao leite derretido por cima.",
      },
      {
        nome: "Batata com Calabresa Acebolada",
        preco: "R$ 32,00",
        descricao:
          "300g de batata frita, calabresa em pedaços com cebola, metade molho de cheddar e metade molho catupiry com mussarela.",
      },
    ],
  },
  {
    categoria: "Combos",
    itens: [
      {
        nome: "1 Hot Dog Duplo + 1 Fritas + Bebida",
        preco: "R$ 49,00",
        descricao: "1 Hot Dog Tradicional Duplo + 1 Fritas + 1 Lata de Guaraná.",
      },
      {
        nome: "2 Hot Dog Tradicional + 1 Fritas + Bebida",
        preco: "R$ 79,00",
        descricao: "2 Hot Dog Tradicional + 1 Fritas + 2 Coca-Cola lata.",
      },
      {
        nome: "4 Hot Dog Tradicional + 1 Bebida",
        preco: "R$ 112,00",
        descricao: "4 Hot Dog Tradicional + 1 Coca-Cola 2l.",
      },
    ],
  },
  {
    categoria: "MilkShakes",
    itens: [
      {
        nome: "Milk Shake Doce de Leite",
        preco: "R$ 32,00",
        descricao: "MilkShake Doce de Leite MUMU com farofa de paçoca no copo de 350ml.",
      },
      {
        nome: "Milk Shake Choco com Oreo",
        preco: "R$ 32,00",
        descricao: "MilkShake Chocolate ao leite com pedaços de Oreo no copo de 350ml.",
      },
    ],
  },
  {
    categoria: "Docinho",
    itens: [
      { nome: "Pudinzim", preco: "R$ 15,99", descricao: "Pudim cremoso de 120g." },
      { nome: "Cookie Nutella", preco: "R$ 13,99", descricao: "Cookie recheado com Nutella." },
      {
        nome: "Mini Churros com MUMU",
        preco: "R$ 22,00",
        descricao: "10 mini churros fritos com acompanhamento de doce de leite MUMU.",
      },
    ],
  },
  {
    categoria: "Bebidas",
    itens: [
      { nome: "Coca Cola lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Coca Cola Zero lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Guaraná lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Guaraná lata Zero", preco: "R$ 7,00", descricao: "Lata 350ml" },
      { nome: "Sprite lata", preco: "R$ 7,00", descricao: "Lata 350ml" },
      {
        nome: "Suco Uva Integral Bordô ou Branco",
        preco: "R$ 15,00",
        descricao: "Suco Cavichion Garrafinha 300ml - Sem Conservantes",
      },
      { nome: "Coca Cola 2l", preco: "R$ 15,00", descricao: "2 litros" },
      { nome: "Coca Cola 2l Zero", preco: "R$ 15,00", descricao: "2 litros" },
      { nome: "Água sem Gás", preco: "R$ 6,00", descricao: "500ml" },
      { nome: "Água com Gás", preco: "R$ 6,00", descricao: "500ml" },
      { nome: "Heineken Long Neck 330ml", preco: "R$ 12,00", descricao: "Para maiores de 18 anos." },
    ],
  },
];

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

function MenuItemCard({ item }: { item: Item }) {
  return (
    <Card variant="elevated" className="flex h-full flex-col">
      <CardHeader>
        {item.destaque ? <DestaqueBadge label={item.destaque} /> : null}
        <CardTitle>{item.nome}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">{item.descricao}</CardContent>
      <CardFooter className="justify-between">
        <Text size="lead" className="font-display font-black">
          {item.preco}
        </Text>
        <Button size="sm">
          Pedir <ArrowRight aria-hidden />
        </Button>
      </CardFooter>
    </Card>
  );
}

function Cardapio() {
  return (
    <ShowcaseShell>
      <section className="border-b-2 border-border px-6 py-16">
        <Text size="caption" tone="muted">
          Exemplo real · preview-only
        </Text>
        <Heading level="h1" className="mt-4">
          Cardápio<span className="text-primary">.</span>
        </Heading>
        <Text size="lead" className="mt-4 max-w-2xl">
          Hot dogs de 30cm, fritas carregadas e shakes que são sobremesa. Escolheu, chegou.
        </Text>
      </section>

      <Marquee
        items={["Aberto até 23h", "Retirada no balcão", "Delivery", "Hot dog 30cm"]}
        variant="brand"
      />

      {MENU.map((grupo, gi) => (
        <section
          key={grupo.categoria}
          id={grupo.categoria.toLowerCase().replaceAll(" ", "-")}
          className="border-b-2 border-border px-6 py-14"
        >
          <div className="flex items-baseline gap-4">
            <Heading level="h2">
              {grupo.categoria}
            </Heading>
            <Text size="caption" tone="muted">
              {grupo.itens.length} {grupo.itens.length === 1 ? "item" : "itens"}
            </Text>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {grupo.itens.map((item) => (
              <MenuItemCard key={item.nome} item={item} />
            ))}
          </div>
          {gi === 0 && (
            <Caption>Cards com variant elevated, badges de destaque e CTA — tudo do sistema.</Caption>
          )}
        </section>
      ))}

      <section className="px-6 py-16 text-center">
        <Heading level="h3">
          Bateu a fome<span className="text-primary">?</span>
        </Heading>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg">Pedir agora</Button>
          <Button size="lg" variant="secondary">
            Ver combos
          </Button>
        </div>
      </section>
    </ShowcaseShell>
  );
}
