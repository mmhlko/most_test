import { AUTH_ERROR, AUTH_LOADING, SET_USER } from "../authActionTypeNames";
import { TUser } from "modules/login/types/authTypes";

export type TAuthActions =  TSetUserDataAction | TSetAuthLoadingAction | TSetAuthErrorAction;

export type TSetUserDataAction = {
    type: typeof SET_USER,
    payload: TUser
}

export type TSetAuthLoadingAction = {
    type: typeof AUTH_LOADING,
    payload: boolean
}

export type TSetAuthErrorAction = {
    type: typeof AUTH_ERROR,
    payload: string
}