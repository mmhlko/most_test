import { AxiosResponse } from "axios";
import { api } from "utils/api";
import { TUserCarts } from "../types/cartTypes";

export class CartsApi {

    fetchUserCart(id: number): Promise<AxiosResponse<TUserCarts>> {
        return api.get(`carts/user/${id}`);
    }
}

export const apiCarts = new CartsApi();