import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-nunito font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 text-center leading-tight",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-xl",
        outline: "border-2 border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-xl",
        ghost: "hover:bg-muted hover:text-foreground rounded-xl",
        link: "text-secondary underline-offset-4 hover:underline",
        cta: "bg-cta-gradient text-accent-foreground hover:scale-[1.02] hover:shadow-cta rounded-2xl shadow-lg animate-pulse-glow font-fredoka w-full min-h-[52px] px-6 py-4 text-base md:text-lg",
        hero: "bg-cta-gradient text-accent-foreground hover:scale-[1.02] hover:shadow-cta rounded-2xl shadow-lg font-fredoka w-full min-h-[52px] px-6 py-4 text-base md:text-lg",
        soft: "bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-xl",
      },
      size: {
        default: "h-11 px-6 py-2 text-base",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        xl: "min-h-[52px] px-6 py-4 text-base md:text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
