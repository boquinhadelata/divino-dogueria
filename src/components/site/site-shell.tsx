import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";
import { NeonLogo } from "../ui/neon-logo";
import { CONTATO, PEDIR_GERAL } from "../../data/cardapio";

const NAV = [
  { to: "/site", label: "Início" },
  { to: "/site/cardapio", label: "Cardápio" },
  { to: "/site/sobre", label: "Sobre" },
  { to: "/site/onde-estamos", label: "Onde estamos" },
  { to: "/site/contato", label: "Contato" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b-2 border-border bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Link to="/site" aria-label="Divino Dogueria — início">
            <NeonLogo variant="on" layout="inline" flicker={false} className="h-9" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "font-display text-caption font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.to && "text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={PEDIR_GERAL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm" })}
          >
            <MessageCircle aria-hidden /> Pedir agora
          </a>
        </div>
        <nav className="flex gap-4 overflow-x-auto border-t-2 border-border px-6 py-3 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "whitespace-nowrap font-display text-caption font-bold uppercase tracking-wider text-muted-foreground",
                pathname === item.to && "text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t-2 border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <NeonLogo variant="on" size="sm" flicker={false} />
            <p className="mt-4 text-body leading-relaxed opacity-80">
              Dogão de 30cm, fritas carregadas e shake que é sobremesa.
            </p>
          </div>
          <div>
            <p className="font-display text-caption font-bold uppercase tracking-wider text-primary">
              Horários
            </p>
            <ul className="mt-4 space-y-1 text-body opacity-80">
              {CONTATO.horarios.map((h) => (
                <li key={h.dia}>
                  {h.dia}: {h.hora}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-display text-caption font-bold uppercase tracking-wider text-primary">
              Contato
            </p>
            <ul className="mt-4 space-y-1 text-body opacity-80">
              <li>{CONTATO.endereco}</li>
              <li>{CONTATO.cidade}</li>
              <li>{CONTATO.telefone}</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={PEDIR_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                WhatsApp
              </a>
              <a
                href={CONTATO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center border-2 border-background px-4 font-display text-caption font-bold uppercase tracking-wider transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-background/30 px-6 py-6 text-center text-caption uppercase tracking-wider opacity-70">
          © {new Date().getFullYear()} Divino Dogueria — Gramado, RS
        </div>
      </footer>
    </div>
  );
}
