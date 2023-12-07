import { TCard } from "modules/card-list/types/cardListTypes"
import s from "./styles.module.scss"
import { ProductPrice } from "components/product-price"
import { Button } from "ui/button/Button"
import { Link } from "react-router-dom"
import { RoutePath } from "pages/routeConfig"

export const Card = (props:TCard) => {

    return (
        <article className={s.card}>
            <Link style={{width: "100%"}} to={`${RoutePath.products}/${props.id}`}>
                <img src={props.thumbnail} alt={props.title} className={s.card__image} />
            </Link>
            <h3>{props.title}</h3>
            <ProductPrice price={props.price} discount={props.discountPercentage} type='small'/>
            <Button>Add to cart</Button>
        </article>
    )
}