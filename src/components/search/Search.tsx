
import s from "./styles.module.scss";
import { ChangeEvent, FormEvent } from 'react';
import SearchIcon from './assets/search-icon.svg';
import { Input } from "ui/button/input/Input";
import classNames from "classnames";

interface ISearchProps {
    handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void,
    handleInputChange: (value: string) => void,
    searchValue: string,
}

export const Search = ({ handleFormSubmit, handleInputChange, searchValue}: ISearchProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e.target.value)
    }

    return (
        <form className={s.search} onSubmit={handleFormSubmit}>
            <Input 
                type="text"
                onChange={handleChange}
                value={searchValue}
                placeholder="search"
                className={s.search__input}
            />
            <button type='submit' className={classNames(s.search__btn, s.search__magnifier_btn)}>
                <SearchIcon />
            </button>
        </form>

    )
}
