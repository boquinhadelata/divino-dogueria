import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const marqueeVariants = cva(
  "flex overflow-hidden border-y-2 select-none",
  {
    variants: {
      variant: {
        brand: "bg-primary text-primary-foreground border-primary",
        ink: "bg-foreground text-background border-foreground",
        outline: "bg-background text-foreground border-border",
      },
      size: {
        md: "py-3 text-h4",
        lg: "py-4 text-h3",
      },
    },
    defaultVariants: { variant: "brand", size: "md" },
  },
);

export interface MarqueeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof marqueeVariants> {
  /** Items repeat seamlessly; keep them short. */
  items: string[];
  separator?: React.ReactNode;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, variant, size, items, separator = "•", ...props }, ref) => {
    const row = (ariaHidden: boolean) => (
      <div
        aria-hidden={ariaHidden || undefined}
        className="flex shrink-0 animate-marquee items-center font-display font-black uppercase tracking-tight"
      >
        {items.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="px-6">{item}</span>
            <span aria-hidden className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    );
    return (
      <div ref={ref} className={cn(marqueeVariants({ variant, size }), className)} {...props}>
        {row(false)}
        {row(true)}
      </div>
    );
  },
);
Marquee.displayName = "Marquee";

export { Marquee, marqueeVariants };
