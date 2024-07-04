import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/utilities/utils";

const headerVariants = cva(
  "text-3xl font-extralight text-gray-800 dark:text-gray-200",
  {
    variants: {
      variant: {
        default: "",
        underlined: "border-b border-gray-300 dark:border-gray-800 pb-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {
  children: React.ReactNode;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { className, variant, ...rest } = props;
  return (
    <div className={cn(headerVariants({ variant, className }))}>
      <h1
        className="text-2xl font-light text-gray-900 dark:text-gray-100"
        {...props}
      >
        {props.children}
      </h1>
    </div>
  );
};
