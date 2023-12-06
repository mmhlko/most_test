import { MouseEvent, ReactNode } from "react";
import s from "./styles.module.scss"

export type TButtonProps = {
    children: ReactNode,
    action?: () => void,
}

export const Button = ({ children, action }: TButtonProps) => {

    return (
        <button
            onClick={action}
            className={s.button}
        >
            {children}
        </button>
    )
}