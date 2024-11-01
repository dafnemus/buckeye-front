import { IconList } from "@components/Icon/types";
import { AnchorHTMLAttributes, ReactNode } from "react";

export type ButtonVariationType = "primary" | "link";

export type ButtonTypes = "button" | "submit" | "reset" | undefined;

export interface IButtonProps {
  as?: "button" | "a";
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconList;
  onClick?: () => void;
  text?: string;
  title?: string;
  type?: ButtonTypes;
  to?: string;
  variation?: ButtonVariationType;
}

export interface IAnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: IconList;
  variation?: ButtonVariationType;
  onClick?: never;
  text?: string;
  type?: never;
  to: string;
}
