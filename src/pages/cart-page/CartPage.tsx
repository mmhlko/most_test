import { ContentHeader } from "components/content-header"
import { Cart } from "modules/cart/components/Cart"

export const CartPage = () => {
    return (
        <div className="content container">
            <ContentHeader title='Cart' />
            <Cart />
        </div>
    )
}