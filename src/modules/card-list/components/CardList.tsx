import { useEffect } from "react"
import { apiSpots } from "../api/productsApi"
import { useDispatch } from "react-redux"
import { setCardListAction } from "../store/cardListActions";

export const CardList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
       
        apiSpots.fetchSpots()
            .then(res => dispatch(setCardListAction(res.data)))
    }, [])

    return (
        <section>
            CardList
        </section>
    )   
}