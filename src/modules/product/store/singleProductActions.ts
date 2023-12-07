import { TCard } from "modules/card-list/types/cardListTypes"
import { SET_SINGLE_PRODUCT, SET_SINGLE_PRODUCT_ERROR, SET_SINGLE_PRODUCT_LOADING } from "./singleProductActionTypeNames"
import { TSingleProductDataAction, TSingleProductErrorAction, TSingleProductLoadingAction } from "./types/singleProductActionTypes"

export const setSingleProductAction = (data: TCard): TSingleProductDataAction => {
    return {
        type: SET_SINGLE_PRODUCT,
        payload: data,
    }
}

export const setSingleProductLoadingAction = (data: boolean): TSingleProductLoadingAction => {
    return {
        type: SET_SINGLE_PRODUCT_LOADING,
        payload: data,
    }
}

export const setSingleProductErrorAction = (data: string): TSingleProductErrorAction => {
    return {
        type: SET_SINGLE_PRODUCT_ERROR,
        payload: data,
    }
}