declare module "react-textfit" {
  import { ComponentType, HTMLAttributes } from "react";

  export interface TextfitProps extends HTMLAttributes<HTMLDivElement> {
    mode?: "single" | "multi";
    max?: number;
    min?: number;
    forceSingleModeWidth?: boolean;
    throttle?: number;
  }

  export const Textfit: ComponentType<TextfitProps>;
}
