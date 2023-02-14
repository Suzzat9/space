import { FC } from "react";
import { CircleButtonProps } from "../CircleButton/CircleButton";
export interface CircleMenuItemProps extends Omit<CircleButtonProps, "size"> {
    size?: number;
    radius?: number;
    menuActive?: boolean;
    rotationAngle?: number;
}
export declare const CircleMenuItem: FC<CircleMenuItemProps>;
