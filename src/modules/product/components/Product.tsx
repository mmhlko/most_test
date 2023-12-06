import { useEffect } from "react"
import { apiSingleProduct } from "../api/productApi"
import { useParams } from "react-router-dom"
import { ContentHeader } from "components/content-header"
import { useDispatch } from "react-redux"
import { setSingleProductAction } from "../store/singleProductActions"
import { useAppSelector } from "storage/hookTypes"
import s from "./styles.module.scss"
import { ProductPrice } from "components/product-price"
import { Button } from "ui/button/Button"
import ButtonCount from "components/button-count"
import { Spinner } from "components/spinner/Spinner"
import Rating from "components/rating"

export const Product = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useAppSelector(state => state.singleProduct.data)

    const handleCartClick = () => {
        //
    }

    useEffect(() => {
        apiSingleProduct.fetchSingleProduct(+productId)
            .then(res => dispatch(setSingleProductAction(res.data)))
    }, [])

    return (
        <>
            <ContentHeader textButton={'back'} title={singleProduct?.title} />
            <section>
                <div className={s.product}>
                    <div className={s.image_wrapper}>
                        <img src={singleProduct?.thumbnail} alt={singleProduct?.title} />
                    </div>
                    <div className={s.desc}>
                        <Rating currentRating={singleProduct?.rating}/>
                        <ProductPrice price={singleProduct?.price} discount={singleProduct?.discountPercentage} type='small' />
                        <p>In stock: {singleProduct?.stock}</p>
                        <div className={s.btnWrap}>
                            <div className={s.left}>
                                <ButtonCount
                                    amount={2}
                                //handleIncrement={() => { dispatch(incrementQuantityCart(addDataCart)) }}
                                //handleDecrement={() => { dispatch(decrementQuantityCart(addDataCart)) }}
                                //handleCountChange={(newQuantity) => { dispatch(changeProductQuantityCart({ ...addDataCart, quantity: newQuantity })) }}
                                />
                            </div>
                            {/* <Button action={handleCartClick}>{!productInCartInfo.quantity && productInCartInfo.quantity === 0 ? 'В корзину' : 'В корзине'}</Button> */}
                            <Button action={handleCartClick}>Add to cart</Button>
                        </div>
                    </div>

                </div>
                <div className={s.box}>
                    <h2 className={s.title}>Description</h2>
                    <p><b>Brand:</b> {singleProduct?.brand}</p>
                    <p>{singleProduct?.description}</p>
                </div>
            </section>
            
        </>
    )
}