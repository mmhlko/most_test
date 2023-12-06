import { useEffect } from "react"
import { apiProducts } from "../api/productsApi"
import { useDispatch } from "react-redux"
import { setCardListAction } from "../store/cardListActions";
import { useAppSelector } from "storage/hookTypes";
import { Card } from "components/card/Card";
import s from "./styles.module.scss"

export const CardList = () => {
    const productList = useAppSelector(state => state.cardList?.data?.products)
    const dispatch = useDispatch();

    useEffect(() => {       
        !productList && apiProducts.fetchProducts()
            .then(res => dispatch(setCardListAction(res.data)))
    }, [])

    return (
        <section className={s.cardList_wrapper}>
            {productList?.map(item => <Card key={item.id} {...item}/>)}
        </section>
    )   
}