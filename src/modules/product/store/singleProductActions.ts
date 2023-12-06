import { TCard } from "modules/card-list/types/cardListTypes"
import { SET_SINGLE_PRODUCT } from "./singleProductActionTypeNames"
import { TSingleProductDataAction } from "./types/singleProductActionTypes"

export const setSingleProductAction = (data: TCard): TSingleProductDataAction => {
    return {
        type: SET_SINGLE_PRODUCT,
        payload: data,
    }
}