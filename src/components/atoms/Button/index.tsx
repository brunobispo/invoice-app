import React from "react";

import { Container } from "./style";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClick?: () => void;
  isGroup?: boolean;
  isCompact?: boolean;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  className,
  onClick,
  isGroup = false,
  isCompact = false,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) => (
  <Container
    onClick={onClick}
    className={className}
    isGroup={isGroup}
    variant={variant}
    disabled={disabled}
    isCompact={isCompact}
    {...props}
  >
    {children}
  </Container>
);

export default Button;
