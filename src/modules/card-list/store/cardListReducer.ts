import { TCardListActions } from "modules/card-list/store/types/cardListActionTypes";
import { TCardListState } from "./types/cardListReducerTypes";
import { RESET_CARDLIST_BY_CURRENT_SORT, SET_CARDLIST, SET_CARDLIST_BY_CURRENT_SORT, SET_CARDLIST_ERROR, SET_CARDLIST_LOADING } from "./cardListActionTypeNames";
import { TABS_ID } from "../types/cardListTypes";
import { cardListSort } from "../helpers/getSortStringValue";

const initialState: TCardListState = {
    data: null,
    errorState: null,
    currentSort: null,
    loading: false,
};

export function cardListReducer(state = initialState, action: TCardListActions) {

    switch (action.type) {
        case SET_CARDLIST:
            return { ...state, data: action.payload }
        case SET_CARDLIST_LOADING:
            return { ...state, loading: action.payload }
        case SET_CARDLIST_ERROR:
            return { ...state, errorState: action.payload }
        case RESET_CARDLIST_BY_CURRENT_SORT:
            return { ...state, currentSort: null }
        case SET_CARDLIST_BY_CURRENT_SORT:
            switch (action.payload) {
                case TABS_ID.PRICE:
                    return { ...state, data: { ...state.data, products: state.data.products.sort((a, b) => cardListSort(a, b, TABS_ID.PRICE)) }, currentSort: action.payload }
                case TABS_ID.DISCOUNT:
                    return { ...state, data: { ...state.data, products: state.data.products.sort((a, b) => cardListSort(a, b, TABS_ID.DISCOUNT)) }, currentSort: action.payload }
                case TABS_ID.RATING:
                    return { ...state, data: { ...state.data, products: state.data.products.sort((a, b) => cardListSort(a, b, TABS_ID.RATING)) }, currentSort: action.payload }
                default:
                    break;
            }
            break;
        default:
            return state
    }
}