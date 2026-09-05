import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva("font-display font-black uppercase tracking-tight leading-[0.95]", {
  variants: {
    level: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
      h4: "text-h4",
    },
  },
  defaultVariants: { level: "h2" },
});

type HeadingLevel = NonNullable<VariantProps<typeof headingVariants>["level"]>;

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const tagFor: Record<HeadingLevel, "h1" | "h2" | "h3" | "h4"> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", ...props }, ref) => {
    const Tag = tagFor[level ?? "h2"];
    return <Tag ref={ref} className={cn(headingVariants({ level }), className)} {...props} />;
  },
);
Heading.displayName = "Heading";

const textVariants = cva("leading-relaxed", {
  variants: {
    size: {
      lead: "text-lead",
      body: "text-body",
      caption: "text-caption uppercase tracking-wider font-medium",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-primary",
    },
  },
  defaultVariants: { size: "body", tone: "default" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, tone, ...props }, ref) => (
    <p ref={ref} className={cn(textVariants({ size, tone }), className)} {...props} />
  ),
);
Text.displayName = "Text";

export { Heading, headingVariants, Text, textVariants };
