import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-caption",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground px-3 py-1",
        ink: "bg-foreground text-background px-3 py-1",
        outline: "border-2 border-foreground text-foreground px-3 py-1",
        pill: "bg-foreground text-background rounded-full px-4 py-1.5",
      },
    },
    defaultVariants: { variant: "solid" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  ),
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
