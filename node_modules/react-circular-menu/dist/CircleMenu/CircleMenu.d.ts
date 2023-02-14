import { FC, ReactElement, ReactNode } from "react";
interface Props {
    startAngle: number;
    rotationAngle: number;
    rotationAngleInclusive?: boolean;
    radius?: number;
    itemSize?: number;
    className?: string;
    menuToggleElement?: ReactElement;
    menuToggleClassName?: string;
    onMenuToggle?: (toggleState: boolean) => void;
    children: ReactNode;
}
export declare const CircleMenu: FC<Props>;
export {};
