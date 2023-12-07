import { TUser } from "modules/login/types/authTypes"

export type TAuthState = {
    data: TUser,
    errorState: string | null,
    loading: boolean
}