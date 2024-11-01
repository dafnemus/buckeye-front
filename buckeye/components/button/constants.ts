import { ButtonVariationType } from "./types";

const baseStyles =
  "flex rounded-full gap-1 justify-center items-center font-bold transition-buttons leading-none";

export const buttonStyles: { [key in ButtonVariationType]: string | string[] } =
  {
    primary: [
      baseStyles,
      "bg-primary text-white ring-2 ring-primary rounded p-2 px-4",
      "hover:bg-primary-700 hover:ring-primary-700",
      "active:bg-primary active:ring-blue-300",
      "disabled:ring-primary-300 disabled:bg-primary-300 disabled:cursor-not-allowed",
    ],
    link: [
      "font-bold inline-flex gap-1 text-white transition-buttons pb-1 px-1",
      "active:border-2 active:border-x-0 active:border-t-0 active:border-secondary active:text-secondary",
      "hover:text-blue-500",
      "disabled:text-blue-300",
    ],
  };
