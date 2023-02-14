import { FC, ReactNode } from "react";
import { TooltipPlacement } from "./library/types";
export interface TooltipProps {
    title: string;
    placement?: TooltipPlacement;
    children: ReactNode;
}
export declare const Tooltip: FC<TooltipProps>;
