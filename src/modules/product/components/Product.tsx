import { useEffect } from "react"
import { apiSingleProduct } from "../api/productApi"
import { useParams } from "react-router-dom"
import { ContentHeader } from "components/content-header"
import { useDispatch } from "react-redux"
import { setSingleProductAction, setSingleProductErrorAction, setSingleProductLoadingAction } from "../store/singleProductActions"
import { useAppSelector } from "storage/hookTypes"
import s from "./styles.module.scss"
import { ProductPrice } from "components/product-price"
import { Button } from "ui/button/Button"
import { Spinner } from "components/spinner/Spinner"
import Rating from "components/rating"
import { singleProductSelector } from "../store/singleProductSelectors"
import { AxiosError } from "axios"

export const Product = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { data: singleProduct, loading } = useAppSelector(singleProductSelector)

    const apiGerSingleProduct = () => {
        dispatch(setSingleProductLoadingAction(true))
        apiSingleProduct.fetchSingleProduct(+productId)
            .then(res => dispatch(setSingleProductAction(res.data)))
            .catch((err: AxiosError) => dispatch(setSingleProductErrorAction(err.message)))
            .finally(() => dispatch(setSingleProductLoadingAction(false)))
    }

    useEffect(() => {
        apiGerSingleProduct()
    }, [])

    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <section>
                        <ContentHeader textButton={'back'} title={singleProduct?.title} />
                        <div className={s.product}>
                            <div className={s.image_wrapper}>
                                <img src={singleProduct?.thumbnail} alt={singleProduct?.title} />
                            </div>
                            <div className={s.desc}>
                                <Rating currentRating={Math.round(singleProduct?.rating)} />
                                <ProductPrice price={singleProduct?.price} discount={singleProduct?.discountPercentage} type='small' />
                                <p>In stock: {singleProduct?.stock}</p>
                            </div>

                        </div>
                        <div className={s.box}>
                            <h2 className={s.title}>Description</h2>
                            <p><b>Brand:</b> {singleProduct?.brand}</p>
                            <p>{singleProduct?.description}</p>
                        </div>
                    </section>
            }

        </>
    )
}