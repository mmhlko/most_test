
import { TCartProduct } from 'modules/cart/types/cartTypes';
import CartItem from '../cart-item';
import s from './styles.module.scss'

export const CartList = ({productsCart}: {productsCart: TCartProduct[]}) => {
  return (
    <div className={s.cartList}>      
      {productsCart.map((dataItem) => <CartItem key={dataItem.id} {...dataItem}/>)}      
    </div>
  );
}
