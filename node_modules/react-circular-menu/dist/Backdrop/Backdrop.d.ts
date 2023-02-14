import { FC, ReactNode } from "react";
export interface BackdropProps {
    className?: string;
    active: boolean;
    onClick: () => void;
    children: ReactNode;
}
export declare const Backdrop: FC<BackdropProps>;
