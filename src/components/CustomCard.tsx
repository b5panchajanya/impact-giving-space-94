
import React from "react";
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

const CustomCard = ({
  glass = false,
  hover = false,
  className,
  children,
  ...props
}: CustomCardProps) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl overflow-hidden",
        glass ? "glass-card dark:glass-card-dark" : "border shadow-subtle",
        hover && "hover:shadow-elevation transition-shadow duration-300 hover-scale",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CustomCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomCardHeader = ({ className, children, ...props }: CustomCardHeaderProps) => {
  return (
    <div className={cn("p-6 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

interface CustomCardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const CustomCardTitle = ({ className, children, ...props }: CustomCardTitleProps) => {
  return (
    <h3 className={cn("font-semibold text-xl leading-none tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
};

interface CustomCardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CustomCardDescription = ({ className, children, ...props }: CustomCardDescriptionProps) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
};

interface CustomCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomCardContent = ({ className, children, ...props }: CustomCardContentProps) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
};

interface CustomCardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CustomCardFooter = ({ className, children, ...props }: CustomCardFooterProps) => {
  return (
    <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>
      {children}
    </div>
  );
};

export {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardDescription,
  CustomCardContent,
  CustomCardFooter,
};
