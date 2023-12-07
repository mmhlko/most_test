import { TCardListActions } from "modules/card-list/store/types/cardListActionTypes";
import { TCardListState } from "./types/cardListReducerTypes";
import { SET_CARDLIST, SET_CARDLIST_ERROR, SET_CARDLIST_LOADING } from "./cardListActionTypeNames";

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
        default:
            return state
    }
}