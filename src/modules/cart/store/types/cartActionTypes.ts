import { SET_CART_DATA, SET_CART_ERROR, SET_CART_LOADING } from "../cartActionTypeNames";
import { TUserCarts } from "modules/cart/types/cartTypes";

export type TCartActions =  TSetCartDataAction | TSetCartLoadingAction | TSetCartErrorAction;

export type TSetCartDataAction = {
    type: typeof SET_CART_DATA,
    payload: TUserCarts
}

export type TSetCartLoadingAction = {
    type: typeof SET_CART_LOADING,
    payload: boolean
}

export type TSetCartErrorAction = {
    type: typeof SET_CART_ERROR,
    payload: string
}