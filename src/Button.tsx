import React, { ReactElement } from "react";
import cn from "classnames";
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from "@advclb/react-button";

export type ButtonProps = { sale?: boolean } & BaseButtonProps;

export default function Button({
  className,
  sale,
  ...rest
}: ButtonProps): ReactElement {
  return (
    <BaseButton className={cn(className, { "button--sale": sale })} {...rest} />
  );
}
