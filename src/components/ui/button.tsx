import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;
type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
>;

interface SharedButtonProps {
  className?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps =
  | (SharedButtonProps & { href: string } & AnchorProps)
  | (SharedButtonProps & { href?: undefined } & NativeButtonProps);

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#6f4e37] text-white shadow-lg shadow-[#6f4e37]/20 hover:-translate-y-0.5 hover:bg-[#5c3f2c]",
  secondary:
    "border border-[#cdbca3] bg-[#fffdfa] text-[#6f4e37] hover:-translate-y-0.5 hover:bg-[#f4ecde]",
  ghost:
    "text-[#556b2f] hover:-translate-y-0.5 hover:bg-[#edf2e3] hover:text-[#445725]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function Button(props: ButtonProps) {
  const {
    className,
    children,
    variant = "primary",
    size = "md",
    href,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#556b2f]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdfa]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <a className={classes} href={href} {...(rest as AnchorProps)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as NativeButtonProps)}>
      {children}
    </button>
  );
}