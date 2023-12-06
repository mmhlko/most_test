import { TCardListDataAction } from "modules/card-list/store/types/cardListActionTypes";
import { SET_CARDLIST } from "./cardListActionTypeNames";
import { TProductsResponse } from "../types/cardListTypes";

export const setCardListAction = (data: TProductsResponse): TCardListDataAction => {
    return {
        type: SET_CARDLIST,
        payload: data,
    }
}