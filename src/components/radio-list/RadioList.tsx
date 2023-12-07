import s from "./styles.module.scss";
import { ReactNode, memo } from "react";
import { Tab } from "modules/card-list/types/cardListTypes";
import { Select } from 'antd';

type TRadioListProps = {
    tabs: { id: string, title: string }[],
    name: string,
    action: (arg: string) => void,
    onOptionChecked?: (arg: string) => void,
    children?: ReactNode,
    title: string,
    extraClass?: string
    currentCheckedItem?: string,
    defaultChecked?: boolean,
    selectOptions?: string[]
}

export const RadioList = memo(({ name, tabs, action, onOptionChecked, title, children, extraClass, currentCheckedItem, selectOptions }: TRadioListProps) => {

    const returnSortListItem = (item: Tab, index: number) => {
        const handleInputChange = () => {
            action(item.id)
        }

        return (
            <li key={index}>
                <input
                    onChange={handleInputChange}
                    type="radio" id={item.id + index}
                    name={name} value={item.id}
                    checked={item.id === currentCheckedItem}
                />
                <label htmlFor={item.id + index} className="button">{item.title}</label>
            </li>
        )
    }

    const handleOptionChange = (value: string) => {
        onOptionChecked(value)
    }

    return (
        <div className={extraClass}>
            <div className={s.wrapper}>
                <h2>{title}</h2>
                <Select                    
                    style={{ width: 200 }}
                    options={selectOptions.map((item) => ({ value: item, label: item }))}
                    placeholder="choose category"
                    onChange={handleOptionChange}
                />
                <ul className={s.radio_list}>
                    {tabs.map(returnSortListItem)}
                </ul>
                {children}
            </div>
        </div>
    )
})