import { ProductPrice } from "components/product-price";
import { TCartProduct } from "modules/cart/types/cartTypes";
import s from "./styles.module.scss"
import { RoutePath } from "pages/routeConfig";
import { Link } from "react-router-dom";

const CartItem = ({id, title, price, quantity, total, discountPercentage, thumbnail }:TCartProduct) => {

    return ( 
        <article className={s.cartItem}>
            <Link to={`${RoutePath.products}/${id}`} className={s.link}>
            <div className={s.cartDesc}>
                <img src={thumbnail} alt={title} className={s.cartImage}/>
                <h2 className={s.cartTitle}>{title}</h2>
            </div>
            </Link>
            <span>{quantity}</span>
            <div className={s.cartPrice}>
                <ProductPrice price={price} discount={discountPercentage} type='big' align='right'/>
            </div>
            <div className={s.cartPrice}>
                <ProductPrice price={total} discount={discountPercentage} type='big' align='right'/>
            </div>
        </article>
     );
}

export default CartItem;