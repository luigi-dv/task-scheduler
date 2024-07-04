import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { classNames } from "@/utilities/cn";

const headerVariants = cva(
  "text-3xl font-extralight text-gray-800 dark:text-gray-200 underline",
  {
    variants: {},
    defaultVariants: {},
  },
);

export interface PageHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headerVariants> {
  withUnderline?: boolean;
  children: React.ReactNode;
}

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <div
      className={classNames(
        props.withUnderline
          ? "border-b border-gray-300 dark:border-gray-800 pb-4"
          : "",
      )}
    >
      <h1
        className="text-2xl font-light text-gray-900 dark:text-gray-100"
        {...props}
      >
        {props.children}
      </h1>
    </div>
  );
};
