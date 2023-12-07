import { TCartState } from "./types/cartReducerTypes";
import { SET_CART_DATA, SET_CART_ERROR, SET_CART_LOADING } from "./cartActionTypeNames";
import { TCartActions } from "./types/cartActionTypes";

const initialState: TCartState = {
    data: null,
    errorState: null,
    loading: false,
};

export function cartReducer(state = initialState, action: TCartActions) {

    switch (action.type) {
        case SET_CART_DATA:
            return { ...state, data: action.payload }
        case SET_CART_LOADING:
            return { ...state, loading: action.payload }
        case SET_CART_ERROR:
            return { ...state, errorState: action.payload }
        default:
            return state
    }
}