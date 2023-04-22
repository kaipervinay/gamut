import React from "react";

import * as tailwind_variants from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import * as tailwind_variants_dist_config from "tailwind-variants/dist/config";

declare const buttonVariants: tailwind_variants.TVReturnType<
  {
    variant: {
      default: string;
      destructive: string;
      outline: string;
      secondary: string;
      ghost: string;
      link: string;
    };
    size: {
      default: string;
      sm: string;
      lg: string;
    };
  },
  unknown,
  undefined,
  undefined,
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  tailwind_variants_dist_config.TVConfig<
    {
      variant: {
        default: string;
        destructive: string;
        outline: string;
        secondary: string;
        ghost: string;
        link: string;
      };
      size: {
        default: string;
        sm: string;
        lg: string;
      };
    },
    unknown
  >
>;
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

export { Button, ButtonProps, buttonVariants };
