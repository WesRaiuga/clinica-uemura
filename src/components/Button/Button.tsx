import type { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${style.button} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
