import { TCardListActions } from "modules/card-list/store/types/cardListActionTypes";
import { TCardListState } from "./types/cardListReducerTypes";
import { SET_CARDLIST } from "./cardListActionTypeNames";

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
        default:
            return state
    }
}