
import { Link, To } from 'react-router-dom';
import { ReactNode } from 'react';
import s from './styles.module.css';
import ArrowIcon from './assets/arrow.svg';
const PREV_PAGE = -1;

interface IContentHeaderProps {
    title: string,
    children?: ReactNode,
    to?: string,
    textButton?: string,
    hLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export const ContentHeader = ({ title, children, to, textButton, hLevel = 'h1' }: IContentHeaderProps) => {

    return (
        <>
            {textButton && <Link to={to || PREV_PAGE as To} className={s.buttonBack}><ArrowIcon className={s.iconBack} />{textButton}</Link>}
            <h1 className={s.title}>{title}</h1>
            {children}
        </>
    )
}
