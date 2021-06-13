import React from "react";

import { Container } from "./style";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  onClick?: () => void;
  isGroup: boolean;
  variant: "primary" | "secondary";
};

const Button = ({
  children,
  className,
  onClick,
  isGroup,
  variant,
  disabled,
  ...props
}: ButtonProps) => (
  <Container
    onClick={onClick}
    className={className}
    isGroup={isGroup}
    variant={variant}
    disabled={disabled}
    {...props}
  >
    {children}
  </Container>
);

export default Button;
