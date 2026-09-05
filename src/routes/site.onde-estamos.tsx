import { createFileRoute } from "@tanstack/react-router";
import { Clock, CreditCard, MapPin, Truck } from "lucide-react";
import { Heading, Text } from "../components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { CONTATO, PEDIR_GERAL } from "../data/cardapio";

export const Route = createFileRoute("/site/onde-estamos")({
  head: () => ({
    meta: [
      { title: "Onde estamos — Divino Dogueria" },
      {
        name: "description",
        content:
          "Endereço, horários de funcionamento, formas de pagamento e área de entrega da Divino Dogueria.",
      },
      { property: "og:title", content: "Onde estamos — Divino Dogueria" },
      {
        property: "og:description",
        content: "Endereço, horários, pagamento e área de entrega da Divino Dogueria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OndeEstamos,
});

function OndeEstamos() {
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(
    `${CONTATO.endereco}, ${CONTATO.cidade}`,
  )}&output=embed`;

  return (
    <>
      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h1">
            Onde estamos<span className="text-primary">.</span>
          </Heading>
          <Text size="lead" className="mt-6 max-w-2xl">
            Retire no balcão ou peça delivery. O endereço e os horários abaixo ainda estão em
            confirmação com a loja.
          </Text>
        </div>
      </section>

      <section className="border-b-2 border-border">
        <iframe
          title="Mapa com a localização da Divino Dogueria"
          src={mapa}
          loading="lazy"
          className="h-[420px] w-full border-0"
        />
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <MapPin aria-hidden className="size-5 text-primary" />
              <CardTitle>Endereço</CardTitle>
            </CardHeader>
            <CardContent>
              {CONTATO.endereco}
              <br />
              {CONTATO.cidade}
            </CardContent>
            <a
              href={PEDIR_GERAL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 ${buttonVariants({ size: "md" })}`}
            >
              Falar no WhatsApp
            </a>
          </Card>

          <Card variant="flat" padding="lg">
            <CardHeader>
              <Clock aria-hidden className="size-5 text-primary" />
              <CardTitle>Horários</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {CONTATO.horarios.map((h) => (
                  <li key={h.dia}>
                    <strong>{h.dia}:</strong> {h.hora}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card variant="flat" padding="lg">
            <CardHeader>
              <CreditCard aria-hidden className="size-5 text-primary" />
              <CardTitle>Pagamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {CONTATO.pagamentos.map((p) => (
                  <Badge key={p} variant="outline">
                    {p}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card variant="filled" padding="lg">
            <CardHeader>
              <Truck aria-hidden className="size-5" />
              <CardTitle>Área de entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1">
                {CONTATO.entrega.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
