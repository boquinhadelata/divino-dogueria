import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { cn } from "../../lib/utils";

const NAV = [
  { to: "/", label: "Overview" },
  { to: "/colors", label: "Cores" },
  { to: "/typography", label: "Tipografia" },
  { to: "/components", label: "Componentes" },
  { to: "/cardapio", label: "Cardápio" },
] as const;

function useTheme() {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, setDark };
}

export function ShowcaseShell({ children }: { children: React.ReactNode }) {
  const { dark, setDark } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b-2 border-border bg-background px-6">
        <Link to="/" className="font-display text-lead font-black uppercase tracking-tight">
          The Bold One<span className="text-primary">.</span>
        </Link>
        <nav className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "hidden font-display text-caption font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground sm:block",
                pathname === item.to && "text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
            className="flex size-10 items-center justify-center border-2 border-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t-2 border-border px-6 py-8">
        <p className="text-caption uppercase tracking-wider text-muted-foreground">
          The Bold One — design system · vitrine de verificação (preview-only)
        </p>
      </footer>
    </div>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b-2 border-border px-6 py-16">
      <h2 className="font-display text-h2 font-black uppercase leading-none tracking-tight">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-caption uppercase tracking-wider text-muted-foreground">{children}</p>
  );
}
