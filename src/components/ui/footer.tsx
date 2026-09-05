import * as React from "react";
import { cn } from "../../lib/utils";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn("border-t-2 border-border bg-background px-6 py-12", className)}
      {...props}
    />
  ),
);
Footer.displayName = "Footer";

const FooterHeading = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("font-display text-h2 font-black uppercase leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
FooterHeading.displayName = "FooterHeading";

const FooterNav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("mt-8 flex flex-wrap items-center gap-x-8 gap-y-3", className)}
      {...props}
    />
  ),
);
FooterNav.displayName = "FooterNav";

const FooterLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        "font-display text-caption font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        className,
      )}
      {...props}
    />
  ),
);
FooterLink.displayName = "FooterLink";

const FooterLegal = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("mt-10 text-caption uppercase tracking-wider text-muted-foreground", className)}
      {...props}
    />
  ),
);
FooterLegal.displayName = "FooterLegal";

export { Footer, FooterHeading, FooterNav, FooterLink, FooterLegal };
