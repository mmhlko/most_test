import { AxiosResponse } from "axios";
import { api } from "utils/api";
import { TUserResponse } from "../types/authTypes";

export class AuthApi {

    login(username: string, password: string): Promise<AxiosResponse<TUserResponse>> {
        return api.post("auth/login", { username, password });
    }
}

export const apiAuth = new AuthApi();