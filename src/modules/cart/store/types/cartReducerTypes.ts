import { TUserCarts } from "modules/cart/types/cartTypes"

export type TCartState = {
    data: TUserCarts,
    errorState: string | null,
    loading: boolean
}