import s from "./styles.module.scss";
import { ChangeEvent, HTMLProps } from "react";

interface IFormInputProps extends HTMLProps<HTMLInputElement> {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    label?: string
}

export const Input = ({ value, onChange, placeholder, type = "text", readOnly, label, ...rest }: IFormInputProps) => {

    return (
        <>  
            <label>{label}</label>
            <input
                type={type}
                readOnly={readOnly}
                value={value}
                className={s.input}
                onChange={onChange}
                placeholder={placeholder}
                {...rest}
            />
        </>
    )
}