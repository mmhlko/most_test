import { SET_CARDLIST, SET_CARDLIST_ERROR, SET_CARDLIST_LOADING, SET_CARDLIST_BY_CURRENT_SORT }  from "modules/card-list/store/cardListActionTypeNames";
import { TProductsResponse } from "modules/card-list/types/cardListTypes";

export type TCardListActions =  TCardListDataAction | TCardListLoadingAction | TCardListErrorAction | TCurrentSortAction;

export type TCardListDataAction = {
    type: typeof SET_CARDLIST,
    payload: TProductsResponse
}

export type TCardListLoadingAction = {
    type: typeof SET_CARDLIST_LOADING,
    payload: boolean
}

export type TCardListErrorAction = {
    type: typeof SET_CARDLIST_ERROR,
    payload: string
}

export type TCurrentSortAction = {
    type: typeof SET_CARDLIST_BY_CURRENT_SORT,
    payload: string
}
