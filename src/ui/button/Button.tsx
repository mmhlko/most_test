import { MouseEvent, ReactNode } from "react";
import s from "./styles.module.scss"

export type TButtonProps = {
    children: ReactNode,
    type?: "button" | "submit"
    action?: () => void,
}

export const Button = ({ children, action, type="button" }: TButtonProps) => {

    return (
        <button
            onClick={action}
            className={s.button}
            type={type}
        >
            {children}
        </button>
    )
}