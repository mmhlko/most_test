import { useAppSelector } from "storage/hookTypes";
import s from './styles.module.scss'
import classNames from "classnames";

export const CartAmount = () => {
    const { total, totalQuantity, discountedTotal } = useAppSelector(state => state.cart.data.carts[0]);

    return (
        <>
            <div className={s.cartAmount}>
                <h1 className={s.title}>Cart</h1>
                <div className={s.table}>
                    <div className={s.table__row}>
                        <span className={s.table__row__title}>Products ({totalQuantity})</span>
                        <span className={s.table__row__value}>{total} $</span>
                    </div>
                    {discountedTotal !== 0 && (<div className={s.table__row}>
                        <span className={s.table__row__title}>Discount</span>
                        <span className={classNames(s.table__row__value, s.table__row__value_discount)}>- {total - discountedTotal} $</span>
                    </div>)}
                </div>
                <div className={s.totalCost}>
                    <h2 className={s.totalCost__title}>Total</h2>
                    <span className={s.totalCost__value}>{discountedTotal} $</span>
                </div>
            </div>
        </>
    );
}