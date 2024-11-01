import { icons } from "./constants";
import { IIconProps } from "./types";

const Icon = ({ className, icon }: IIconProps) => {
  const IconSelected = icons[icon];
  return <IconSelected className={className} />;
};

export default Icon;
