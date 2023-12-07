import { SET_CART_DATA, SET_CART_LOADING, SET_CART_ERROR } from "./cartActionTypeNames";
import { TSetCartDataAction, TSetCartErrorAction, TSetCartLoadingAction } from "./types/cartActionTypes";
import { TUserCarts } from "../types/cartTypes";

export const setCartDataAction = (data: TUserCarts): TSetCartDataAction => {
    return {
        type: SET_CART_DATA,
        payload: data,
    }
}

export const setCartLoadingAction = (data: boolean): TSetCartLoadingAction => {
    return {
        type: SET_CART_LOADING,
        payload: data,
    }
}

export const setCartErrorAction = (data: string): TSetCartErrorAction => {
    return {
        type: SET_CART_ERROR,
        payload: data,
    }
}