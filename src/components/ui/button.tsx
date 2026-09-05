import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border-2 border-primary hover:bg-destructive hover:border-destructive",
        secondary:
          "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
        inverse:
          "bg-foreground text-background border-2 border-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground",
        ghost:
          "bg-transparent text-foreground border-2 border-transparent hover:border-foreground",
      },
      size: {
        sm: "h-9 px-4 text-caption",
        md: "h-12 px-6 text-sm",
        lg: "h-16 px-10 text-body",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
