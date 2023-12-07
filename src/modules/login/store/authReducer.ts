import { AUTH_ERROR, AUTH_LOADING, SET_USER } from "./authActionTypeNames";
import { TAuthActions } from "./types/authActionTypes";
import { TAuthState } from "./types/authReducerTypes";

const initialState: TAuthState = {
    data: null,
    errorState: null,
    loading: false,
};

export function authReducer(state = initialState, action: TAuthActions) {

    switch (action.type) {
        case SET_USER:
            return { ...state, data: action.payload }
        case AUTH_ERROR:
            return { ...state, errorState: action.payload }
        case AUTH_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}