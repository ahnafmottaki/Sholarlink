import { Button } from "../ui/button";
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ActionButtonProps = {
  icon: ReactNode;
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const ActionButton: FC<ActionButtonProps> = ({
  icon,
  children,
  className,
  ...props
}) => {
  const Icon = icon;
  return (
    <Button size="lg" variant="outline" className={` ${className}`} {...props}>
      {Icon}
      {children}
    </Button>
  );
};

export default ActionButton;
