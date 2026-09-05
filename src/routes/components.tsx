import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Flame, Loader2, Search, Star } from "lucide-react";
import { ShowcaseShell, Caption } from "../components/showcase/shell";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";
import { Heading, Text } from "../components/ui/typography";
import { Marquee } from "../components/ui/marquee";
import { Navbar, NavbarBrand, NavbarLink, NavbarNav } from "../components/ui/navbar";
import { Footer, FooterHeading, FooterLegal, FooterLink, FooterNav } from "../components/ui/footer";

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: "Componentes — The Bold One" },
      {
        name: "description",
        content: "Galeria interativa de todos os componentes do design system The Bold One.",
      },
      { property: "og:title", content: "Componentes — The Bold One" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Components,
});

const SECTIONS = [
  { id: "button", label: "Button" },
  { id: "badge", label: "Badge" },
  { id: "card", label: "Card" },
  { id: "input", label: "Input" },
  { id: "textarea", label: "Textarea" },
  { id: "select", label: "Select" },
  { id: "typography", label: "Typography" },
  { id: "marquee", label: "Marquee" },
  { id: "navbar", label: "Navbar" },
  { id: "footer", label: "Footer" },
] as const;

function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section id={title.toLowerCase()} className="scroll-mt-24 border-b-2 border-border px-6 py-14">
      <h2 className="font-display text-h3 font-black uppercase tracking-tight">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-4">{children}</div>
      <Caption>{label}</Caption>
    </div>
  );
}

function Components() {
  const [query, setQuery] = React.useState("");
  const visible = SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <ShowcaseShell>
      <div className="grid lg:grid-cols-[240px_1fr]">
        <aside className="border-b-2 border-border lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:border-b-0 lg:border-r-2">
          <div className="p-4">
            <div className="relative">
              <Search aria-hidden className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filtrar…"
                aria-label="Filtrar componentes"
                className="h-10 pl-9 text-sm"
              />
            </div>
            <nav className="mt-4 flex flex-col gap-1" aria-label="Componentes">
              {visible.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-2 py-1.5 font-display text-caption font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {s.label}
                </a>
              ))}
              {visible.length === 0 && (
                <p className="px-2 py-1.5 text-caption uppercase tracking-wider text-muted-foreground">
                  Nada encontrado
                </p>
              )}
            </nav>
          </div>
        </aside>

        <div>
          <Demo title="Button">
            <Row label='variant="primary" · "secondary" · "inverse" · "ghost"'>
              <Button>Pedir agora</Button>
              <Button variant="secondary">Ver cardápio</Button>
              <Button variant="inverse">Reservar mesa</Button>
              <Button variant="ghost">Saber mais</Button>
            </Row>
            <Row label='size="sm" · "md" · "lg"'>
              <Button size="sm">Pequeno</Button>
              <Button size="md">Médio</Button>
              <Button size="lg">Grande</Button>
            </Row>
            <Row label="com ícone · loading · disabled">
              <Button>
                Combo da casa <ArrowRight aria-hidden />
              </Button>
              <Button disabled>
                <Loader2 aria-hidden className="animate-spin" /> Preparando
              </Button>
              <Button variant="secondary" disabled>
                Indisponível
              </Button>
            </Row>
            <Caption>{`<Button variant="primary" size="lg">Pedir agora</Button>`}</Caption>
          </Demo>

          <Demo title="Badge">
            <Row label='variant="solid" · "ink" · "outline" · "pill"'>
              <Badge>Novo</Badge>
              <Badge variant="ink">Clássico</Badge>
              <Badge variant="outline">Edição limitada</Badge>
              <Badge variant="pill">
                <Star aria-hidden className="size-3" /> Favorito da casa
              </Badge>
            </Row>
            <Caption>{`<Badge variant="solid">Novo</Badge>`}</Caption>
          </Demo>

          <Demo title="Card">
            <div className="grid gap-6 md:grid-cols-2">
              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="solid">Mais pedido</Badge>
                  <CardTitle>Smash Duplo</CardTitle>
                </CardHeader>
                <CardContent>
                  Dois discos smash de 90g, cheddar duplo, cebola caramelizada e
                  maionese da casa no brioche tostado.
                </CardContent>
                <CardFooter>
                  <Button size="sm">Adicionar — R$ 34</Button>
                  <Button size="sm" variant="ghost">
                    Detalhes
                  </Button>
                </CardFooter>
              </Card>
              <Card variant="brand">
                <CardHeader>
                  <CardTitle>Happy hour</CardTitle>
                </CardHeader>
                <CardContent>
                  Terça a quinta, das 18h às 20h: combo burger + fritas + drink
                  com 20% off.
                </CardContent>
                <CardFooter>
                  <Button variant="inverse" size="sm">
                    Aproveitar
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <Caption>{`<Card variant="elevated">…</Card> · variant: flat | elevated | filled | brand`}</Caption>
          </Demo>

          <Demo title="Input">
            <div className="grid max-w-xl gap-6">
              <div>
                <label htmlFor="demo-name" className="mb-2 block font-display text-caption font-bold uppercase tracking-wider">
                  Nome
                </label>
                <Input id="demo-name" placeholder="Como te chamamos?" />
              </div>
              <div>
                <label htmlFor="demo-phone" className="mb-2 block font-display text-caption font-bold uppercase tracking-wider">
                  Telefone
                </label>
                <Input id="demo-phone" invalid placeholder="(11) 90000-0000" />
                <Caption>invalid — formato inválido</Caption>
              </div>
              <div>
                <label htmlFor="demo-disabled" className="mb-2 block font-display text-caption font-bold uppercase tracking-wider">
                  Mesa
                </label>
                <Input id="demo-disabled" disabled placeholder="Reservada" />
              </div>
            </div>
            <Caption>{`<Input placeholder="…" /> · props: invalid, disabled`}</Caption>
          </Demo>

          <Demo title="Textarea">
            <div className="max-w-xl">
              <label htmlFor="demo-notes" className="mb-2 block font-display text-caption font-bold uppercase tracking-wider">
                Observações do pedido
              </label>
              <Textarea id="demo-notes" placeholder="Sem cebola, ponto da carne…" />
            </div>
            <Caption>{`<Textarea placeholder="…" /> · props: invalid, disabled`}</Caption>
          </Demo>

          <Demo title="Select">
            <div className="max-w-xl">
              <label htmlFor="demo-size" className="mb-2 block font-display text-caption font-bold uppercase tracking-wider">
                Tamanho do combo
              </label>
              <Select id="demo-size" defaultValue="duplo">
                <option value="simples">Simples</option>
                <option value="duplo">Duplo</option>
                <option value="triplo">Triplo</option>
              </Select>
            </div>
            <Caption>{`<Select>…</Select> · props: invalid, disabled`}</Caption>
          </Demo>

          <Demo title="Typography">
            <div className="flex flex-col gap-6">
              <div>
                <Heading level="display">Display</Heading>
                <Caption>{`<Heading level="display">`}</Caption>
              </div>
              <div>
                <Heading level="h2">Título de seção</Heading>
                <Caption>{`<Heading level="h2">`}</Caption>
              </div>
              <div>
                <Text size="lead">Lead para introduzir uma seção com impacto.</Text>
                <Caption>{`<Text size="lead">`}</Caption>
              </div>
              <div>
                <Text size="caption" tone="muted">Caption · muted · caixa alta</Text>
                <Caption>{`<Text size="caption" tone="muted">`}</Caption>
              </div>
            </div>
          </Demo>

          <Demo title="Marquee">
            <div className="-mx-6 flex flex-col">
              <Marquee items={["Smash burger", "Fritas rústicas", "Milk shake"]} />
              <Marquee variant="ink" items={["Aberto até 23h", "Retirada no balcão"]} />
              <Marquee variant="outline" items={["Sem conservantes", "Pão do dia"]} />
            </div>
            <Caption>{`<Marquee items={[…]} variant="brand" />`}</Caption>
          </Demo>

          <Demo title="Navbar">
            <div className="border-2 border-border">
              <Navbar className="static">
                <NavbarBrand>
                  Burger Co<span className="text-primary">.</span>
                </NavbarBrand>
                <NavbarNav>
                  <NavbarLink href="#" active>
                    Cardápio
                  </NavbarLink>
                  <NavbarLink href="#">Lojas</NavbarLink>
                  <NavbarLink href="#">Sobre</NavbarLink>
                </NavbarNav>
              </Navbar>
              <div className="p-8 text-body text-muted-foreground">
                Conteúdo da página abaixo da navbar fixa…
              </div>
            </div>
            <Caption>{`<Navbar><NavbarBrand /><NavbarNav><NavbarLink active />…`}</Caption>
          </Demo>

          <Demo title="Footer">
            <div className="border-2 border-border">
              <Footer className="border-t-0">
                <FooterHeading>
                  Bateu a fome<span className="text-primary">?</span>
                </FooterHeading>
                <FooterNav>
                  <FooterLink href="#">Cardápio</FooterLink>
                  <FooterLink href="#">Delivery</FooterLink>
                  <FooterLink href="#">Instagram</FooterLink>
                </FooterNav>
                <FooterLegal>© 2026 Burger Co — Feito na chapa.</FooterLegal>
              </Footer>
            </div>
            <Caption>{`<Footer><FooterHeading /><FooterNav><FooterLink />…`}</Caption>
          </Demo>
        </div>
      </div>
    </ShowcaseShell>
  );
}
