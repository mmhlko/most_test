import { SET_SINGLE_PRODUCT } from "./singleProductActionTypeNames";
import { TSingleProductActions } from "./types/singleProductActionTypes";
import { TSingleProductState } from "./types/singleProductReducerTypes";

const initialState: TSingleProductState = {
    data: null,
    errorState: null,
    loading: false,
};

export function productReducer(state = initialState, action: TSingleProductActions) {

    switch (action.type) {
        case SET_SINGLE_PRODUCT:
            return { ...state, data: action.payload }
        default:
            return state
    }
}