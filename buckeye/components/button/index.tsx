/* eslint-disable react/button-has-type */
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

import { IAnchorButtonProps, IButtonProps } from "./types";
import Icon from "@components/Icon";
import { buttonStyles } from "./constants";

function Button({
  children,
  className,
  disabled,
  external,
  icon,
  onClick,
  text,
  title,
  type = "button",
  to,
  variation = "primary",
  ...props
}: IButtonProps | IAnchorButtonProps) {
  if (to) {
    return (
      <Link
        href={to}
        className={clsx(
          buttonStyles[variation],
          disabled ? "pointer-events-none opacity-50" : "",
          className
        )}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <Icon icon={icon} />}
        {children || text || title}
      </Link>
    );
  }

  if (external) {
    return (
      <a
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        className={clsx(
          buttonStyles[variation],
          disabled ? "pointer-events-none" : "",
          className
        )}
        title={title}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <Icon icon={icon} />}
        {children || text || title}
      </a>
    );
  }

  return (
    <button
      className={clsx(buttonStyles[variation], className)}
      title={title}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <Icon icon={icon} />}
      {children || text || title}
    </button>
  );
}

export default Button;
