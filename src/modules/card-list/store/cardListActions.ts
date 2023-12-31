import { TCardListDataAction, TCardListErrorAction, TCardListLoadingAction, TCurrentSortAction, TResetCurrentSortAction } from "modules/card-list/store/types/cardListActionTypes";
import { RESET_CARDLIST_BY_CURRENT_SORT, SET_CARDLIST, SET_CARDLIST_BY_CURRENT_SORT, SET_CARDLIST_ERROR, SET_CARDLIST_LOADING } from "./cardListActionTypeNames";
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

export const setCardListByCurrentSortAction = (sort: string): TCurrentSortAction => {
    return {
        type: SET_CARDLIST_BY_CURRENT_SORT,
        payload: sort        
    }
}

export const resetCardListCurrentSortAction = (): TResetCurrentSortAction => {
    return {
        type: RESET_CARDLIST_BY_CURRENT_SORT,
    }
}