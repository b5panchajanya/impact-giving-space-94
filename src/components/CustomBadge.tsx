
import React from "react";
import { cn } from "@/lib/utils";

interface CustomBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const CustomBadge = ({
  variant = "primary",
  className,
  children,
  ...props
}: CustomBadgeProps) => {
  return (
    <div
      className={cn(
        "badge",
        {
          "badge-primary": variant === "primary",
          "badge-secondary": variant === "secondary",
          "badge-outline": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { CustomBadge };
