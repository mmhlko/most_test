import { useEffect } from "react"
import { apiProducts } from "../api/productsApi"
import { useDispatch } from "react-redux"
import { setCardListAction, setCardListErrorAction, setCardListLoadingAction } from "../store/cardListActions";
import { useAppSelector } from "storage/hookTypes";
import { Card } from "modules/card-list/components/card/Card";
import s from "./styles.module.scss"
import { cardListSelector } from "../store/cardListSelectors";
import { Spinner } from "components/spinner/Spinner";
import { AxiosError } from "axios";

export const CardList = () => {
    const { data: products, loading } = useAppSelector(cardListSelector)
    const productList = products?.products
    const dispatch = useDispatch();

    const apiGetProducts = () => {
        dispatch(setCardListLoadingAction(true))
        apiProducts.fetchProducts()
            .then(res => dispatch(setCardListAction(res.data)))
            .catch((err: AxiosError) => dispatch(setCardListErrorAction(err.message)))
            .finally(() => dispatch(setCardListLoadingAction(false)))
    }

    useEffect(() => {
        !productList && apiGetProducts()
    }, [])

    return (
        <>
            {
                loading
                    ? <Spinner />
                    : <section className={s.cardList_wrapper}>
                        {productList?.map(item => <Card key={item.id} {...item} />)}
                    </section>
            }
        </>
    )
}