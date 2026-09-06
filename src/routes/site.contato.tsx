import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Heading, Text } from "../components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button, buttonVariants } from "../components/ui/button";
import { CONTATO, PEDIR_GERAL, whatsappLink } from "../data/cardapio";

export const Route = createFileRoute("/site/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Divino Dogueria" },
      {
        name: "description",
        content:
          "Fale com a Divino Dogueria pelo WhatsApp, telefone ou redes sociais. Pedidos, eventos e encomendas.",
      },
      { property: "og:title", content: "Contato — Divino Dogueria" },
      {
        property: "og:description",
        content: "Fale com a Divino Dogueria pelo WhatsApp, telefone ou redes sociais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [nome, setNome] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome || "cliente"}. ${mensagem}`.trim();
    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <section className="border-b-2 border-border px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Heading level="h1">
            Fala com a gente<span className="text-primary">.</span>
          </Heading>
          <Text size="lead" className="mt-6 max-w-2xl">
            Pedido, encomenda para festa ou só elogiar o dogão: a resposta mais rápida é no
            WhatsApp.
          </Text>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <Card variant="brand" padding="lg">
              <CardHeader>
                <MessageCircle aria-hidden className="size-5" />
                <CardTitle>WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>Pedido direto, sem cadastro e sem app.</CardContent>
              <a
                href={PEDIR_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 ${buttonVariants({ size: "md", variant: "secondary" })}`}
              >
                Abrir conversa
              </a>
            </Card>

            <Card variant="flat" padding="lg">
              <CardHeader>
                <Phone aria-hidden className="size-5 text-primary" />
                <CardTitle>Telefone e redes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:+${CONTATO.whatsapp}`}
                    className={buttonVariants({ size: "sm", variant: "secondary" })}
                  >
                    <Phone aria-hidden /> Ligar {CONTATO.telefone}
                  </a>
                  <a
                    href={CONTATO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "sm", variant: "secondary" })}
                  >
                    Instagram
                  </a>
                  {CONTATO.email && (
                    <a
                      href={`mailto:${CONTATO.email}`}
                      className={buttonVariants({ size: "sm", variant: "secondary" })}
                    >
                      <Mail aria-hidden /> Enviar e-mail
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle>Mande uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <label
                    htmlFor="nome"
                    className="font-display text-caption font-bold uppercase tracking-wider"
                  >
                    Seu nome
                  </label>
                  <Input
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Como podemos te chamar"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="mensagem"
                    className="font-display text-caption font-bold uppercase tracking-wider"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    rows={5}
                    placeholder="Conta pra gente o que você precisa"
                    required
                  />
                </div>
                <Button type="submit" size="lg">
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
