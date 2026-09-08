import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import logoUrl from "../../assets/logos/divino-logo.png";
import iconUrl from "../../assets/logos/divino-icon.png";

const brandLogoVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      board: "",
      bare: "",
      icon: "",
    },
  },
  defaultVariants: { variant: "bare" },
});

export interface BrandLogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">,
    VariantProps<typeof brandLogoVariants> {
  alt?: string;
}

const BrandLogo = React.forwardRef<HTMLImageElement, BrandLogoProps>(
  ({ variant, className, alt = "Divino Dogueria", ...props }, ref) => {
    if (variant === "board") {
      return (
        <span className={cn(brandLogoVariants({ variant }), className)}>
          <img ref={ref} src={logoUrl} alt={alt} className="h-full w-auto" {...props} />
        </span>
      );
    }
    if (variant === "icon") {
      return (
        <img
          ref={ref}
          src={iconUrl}
          alt={alt}
          className={cn("w-auto", className)}
          {...props}
        />
      );
    }
    return (
      <img
        ref={ref}
        src={logoUrl}
        alt={alt}
        className={cn("w-auto", className)}
        {...props}
      />
    );
  },
);
BrandLogo.displayName = "BrandLogo";

export { BrandLogo, brandLogoVariants };
