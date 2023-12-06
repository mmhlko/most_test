import { SET_CARDLIST }  from "modules/card-list/store/cardListActionTypeNames";
import { TCard, TProductsResponse } from "modules/card-list/types/cardListTypes";

export type TCardListActions =  TCardListDataAction;

export type TCardListDataAction = {
    type: typeof SET_CARDLIST,
    payload: TProductsResponse
}

