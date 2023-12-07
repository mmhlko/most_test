import s from './styles.module.scss'
import { useAppSelector } from 'storage/hookTypes';

function CartInfo() {

    const count = useAppSelector(state => state.cart?.data?.carts[0]?.totalQuantity)

    return ( 
        
        <>
        <div className={s.cartTitle}>
            <span>{count} products in cart</span>
        </div>
        </>
     );
}

export default CartInfo;

