import * as React from "react";
import { cn } from "../../lib/utils";

const Navbar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(
        "sticky top-0 z-40 flex h-16 items-center justify-between border-b-2 border-border bg-background px-6",
        className,
      )}
      {...props}
    />
  ),
);
Navbar.displayName = "Navbar";

const NavbarBrand = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-display text-lead font-black uppercase tracking-tight", className)}
      {...props}
    />
  ),
);
NavbarBrand.displayName = "NavbarBrand";

const NavbarNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} className={cn("flex items-center gap-6", className)} {...props} />
  ),
);
NavbarNav.displayName = "NavbarNav";

export interface NavbarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ className, active, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={active ? "page" : undefined}
      className={cn(
        "font-display text-caption font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        active && "text-primary",
        className,
      )}
      {...props}
    />
  ),
);
NavbarLink.displayName = "NavbarLink";

export { Navbar, NavbarBrand, NavbarNav, NavbarLink };
