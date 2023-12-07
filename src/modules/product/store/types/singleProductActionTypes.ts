import { TCard } from "modules/card-list/types/cardListTypes";
import { SET_SINGLE_PRODUCT, SET_SINGLE_PRODUCT_ERROR, SET_SINGLE_PRODUCT_LOADING } from "../singleProductActionTypeNames";

export type TSingleProductActions =  TSingleProductDataAction | TSingleProductLoadingAction | TSingleProductErrorAction;

export type TSingleProductDataAction = {
    type: typeof SET_SINGLE_PRODUCT,
    payload: TCard
}

export type TSingleProductLoadingAction = {
    type: typeof SET_SINGLE_PRODUCT_LOADING,
    payload: boolean
}

export type TSingleProductErrorAction = {
    type: typeof SET_SINGLE_PRODUCT_ERROR,
    payload: string
}

