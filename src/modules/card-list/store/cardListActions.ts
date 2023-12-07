import { TCardListDataAction, TCardListErrorAction, TCardListLoadingAction } from "modules/card-list/store/types/cardListActionTypes";
import { SET_CARDLIST, SET_CARDLIST_ERROR, SET_CARDLIST_LOADING } from "./cardListActionTypeNames";
import { TProductsResponse } from "../types/cardListTypes";

export const setCardListAction = (data: TProductsResponse): TCardListDataAction => {
    return {
        type: SET_CARDLIST,
        payload: data,
    }
}

export const setCardListLoadingAction = (data: boolean): TCardListLoadingAction => {
    return {
        type: SET_CARDLIST_LOADING,
        payload: data,
    }
}

export const setCardListErrorAction = (data: string): TCardListErrorAction => {
    return {
        type: SET_CARDLIST_ERROR,
        payload: data,
    }
}