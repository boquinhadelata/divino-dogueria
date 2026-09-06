import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react";
import { Heading, Text } from "../components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Marquee } from "../components/ui/marquee";
import { buttonVariants } from "../components/ui/button";
import { NeonLogo } from "../components/ui/neon-logo";
import { CONTATO, PEDIR_GERAL, whatsappLink } from "../data/cardapio";
import tijolos from "../assets/tijolos.jpg";
import heroDog from "../assets/produtos/hotdog-divino.jpg";
import fritas from "../assets/produtos/batata-cheddar-bacon.jpg";
import milkshake from "../assets/produtos/milkshake-doce-de-leite.jpg";
import combo from "../assets/produtos/hotdog-duplo.jpg";

export const Route = createFileRoute("/site/")({
  head: () => ({
    meta: [
      { title: "Divino Dogueria — Hot dog gourmet de 30cm" },
      {
        name: "description",
        content:
          "Hot dogs gourmet de 30cm, batatas carregadas, milkshakes e combos. Peça pelo WhatsApp e receba em casa.",
      },
      { property: "og:title", content: "Divino Dogueria — Hot dog gourmet de 30cm" },
      {
        property: "og:description",
        content: "Hot dogs gourmet de 30cm, batatas carregadas, milkshakes e combos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const CAMPEOES = [
  {
    nome: "Hot Dog Divino",
    preco: "R$ 44,90",
    img: heroDog,
    texto: "Calabresa, bacon, carne de panela, Catupiry, cheddar e fritas. O nome não é à toa.",
    tag: "Mais pedido",
  },
  {
    nome: "Batata Cheddar e Bacon",
    preco: "R$ 32,00",
    img: fritas,
    texto: "300g de fritas afogadas em cheddar cremoso com cubinhos de bacon.",
    tag: "Para dividir",
  },
  {
    nome: "Milk Shake Doce de Leite",
    preco: "R$ 32,00",
    img: milkshake,
    texto: "Doce de leite MUMU com farofa de paçoca no copo de 350ml.",
    tag: "Sobremesa",
  },
];

function Home() {
  return (
    <>
      <section
        className="border-b-2 border-border bg-ink bg-cover bg-center"
        style={{ backgroundImage: `url(${tijolos})` }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">
          <NeonLogo variant="on" size="lg" />
          <p className="mt-6 max-w-md font-display text-caption font-bold uppercase tracking-wider text-white/70">
            Letreiro aceso, chapa ligada — todos os dias das 18h às 23h59
          </p>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Badge variant="pill">Aberto hoje até 23h59</Badge>
            <Heading level="display" className="mt-6">
              Dogão de 30cm<span className="text-primary">.</span> Sem meio termo.
            </Heading>
            <Text size="lead" className="mt-6 max-w-xl">
              Hot dog gourmet feito na hora, batata carregada e shake que vale por sobremesa. Pediu,
              chegou quentinho.
            </Text>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={PEDIR_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <MessageCircle aria-hidden /> Pedir no WhatsApp
              </a>
              <Link to="/site/cardapio" className={buttonVariants({ size: "lg", variant: "secondary" })}>
                Ver cardápio <ArrowRight aria-hidden />
              </Link>
            </div>
          </div>
          <img
            src={heroDog}
            alt="Hot dog de 30cm com carne desfiada, cheddar e batata palha"
            width={1600}
            height={1200}
            className="w-full border-2 border-border object-cover shadow-hard"
          />
        </div>
      </section>

      <Marquee
        items={["Hot dog 30cm", "Delivery", "Retirada no balcão", "Feito na hora", "Divino"]}
        variant="brand"
      />

      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h2">Os campeões</Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CAMPEOES.map((c) => (
              <Card key={c.nome} variant="elevated" padding="none" className="flex flex-col">
                <img
                  src={c.img}
                  alt={c.nome}
                  loading="lazy"
                  className="aspect-[4/3] w-full border-b-2 border-border object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <CardHeader>
                    <Badge variant="outline">{c.tag}</Badge>
                    <CardTitle>{c.nome}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">{c.texto}</CardContent>
                  <div className="mt-6 flex items-center justify-between">
                    <Text size="lead" className="font-display font-black">
                      {c.preco}
                    </Text>
                    <a
                      href={whatsappLink(`Olá! Quero pedir 1x ${c.nome} (${c.preco}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ size: "sm" })}
                    >
                      Pedir <ArrowRight aria-hidden />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img
            src={combo}
            alt="Hot dog duplo da Divino Dogueria"
            loading="lazy"
            className="w-full border-2 border-border object-cover"
          />
          <div>
            <Heading level="h2">Combo para a mesa toda</Heading>
            <Text size="lead" className="mt-6">
              Quatro dogões e uma Coca 2l por R$ 112,00. Do jeito que a galera pede na sexta.
            </Text>
            <Link
              to="/site/cardapio"
              hash="combos"
              className={`mt-8 ${buttonVariants({ size: "lg" })}`}
            >
              Ver combos <ArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <Card variant="flat" padding="lg">
            <div className="flex items-center gap-3">
              <Clock aria-hidden className="size-5 text-primary" />
              <Text size="caption" tone="muted">
                Horários
              </Text>
            </div>
            <ul className="mt-4 space-y-1 text-body">
              {CONTATO.horarios.map((h) => (
                <li key={h.dia}>
                  <strong>{h.dia}:</strong> {h.hora}
                </li>
              ))}
            </ul>
          </Card>
          <Card variant="brand" padding="lg">
            <div className="flex items-center gap-3">
              <MapPin aria-hidden className="size-5" />
              <Text size="caption">Onde estamos</Text>
            </div>
            <p className="mt-4 text-body">
              {CONTATO.endereco} — {CONTATO.cidade}
            </p>
            <Link
              to="/site/onde-estamos"
              className="mt-6 inline-flex items-center gap-2 font-display text-caption font-bold uppercase tracking-wider underline underline-offset-4"
            >
              Como chegar <ArrowRight aria-hidden className="size-4" />
            </Link>
          </Card>
        </div>
      </section>
    </>
  );
}
