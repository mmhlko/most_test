import { TUser } from "../types/authTypes";
import { AUTH_ERROR, AUTH_LOADING, SET_USER } from "./authActionTypeNames";
import { TSetAuthErrorAction, TSetAuthLoadingAction, TSetUserDataAction } from "./types/authActionTypes";

export const setUserAction = (data: TUser): TSetUserDataAction => {
    return {
        type: SET_USER,
        payload: data,
    }
}

export const setAuthLoadingAction = (data: boolean): TSetAuthLoadingAction => {
    return {
        type: AUTH_LOADING,
        payload: data,
    }
}

export const setAuthErrorAction = (data: string): TSetAuthErrorAction => {
    return {
        type: AUTH_ERROR,
        payload: data,
    }
}