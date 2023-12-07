import { useEffect } from "react"
import { apiCarts } from "../api/productsApi"
import { useDispatch } from "react-redux"
import { useAppSelector } from "storage/hookTypes";
import { setCartDataAction, setCartErrorAction, setCartLoadingAction } from "../store/cartActions";
import s from "./styles.module.scss";
import CartInfo from "./cart-info/CartInfo";
import { CartList } from "./cart-list/CartList";
import { CartAmount } from "./cart-amount/CartAmount";
import { cartSelector } from "../store/cartSelectors";
import { Spinner } from "components/spinner/Spinner";
import { AxiosError } from "axios";
import { userSelector } from "modules/login/store/authSelectors";
import { getUserLocalStorage } from "utils/auth";

export const Cart = () => {
    const dispatch = useDispatch();
    const currentCart = useAppSelector(state => state.cart?.data?.carts[0])
    const { loading } = useAppSelector(cartSelector)
    const {data: currentUser} = useAppSelector(userSelector)

    const apiGetCart = () => {
        dispatch(setCartLoadingAction(true))
        apiCarts.fetchUserCart(currentUser?.id || getUserLocalStorage().id)
            .then(res => dispatch(setCartDataAction(res.data)))
            .catch((err: AxiosError) => dispatch(setCartErrorAction(err.message)))
            .finally(() => dispatch(setCartLoadingAction(false)))
    }

    useEffect(() => {
        apiGetCart()
    }, [])

    return (
        <>
            {loading
                ? <Spinner />
                : <section>
                    {!currentCart
                        ? <h2>not found</h2>
                        : <div>
                            <CartInfo />
                            <div className={s.contentCart}>
                                <CartList productsCart={currentCart?.products} />
                                <CartAmount />
                            </div>
                        </div>
                    }
                </section>
            }
        </>
    )
}