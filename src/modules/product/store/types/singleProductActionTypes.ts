import { TCard } from "modules/card-list/types/cardListTypes";
import { SET_SINGLE_PRODUCT } from "../singleProductActionTypeNames";

export type TSingleProductActions =  TSingleProductDataAction;

export type TSingleProductDataAction = {
    type: typeof SET_SINGLE_PRODUCT,
    payload: TCard
}

