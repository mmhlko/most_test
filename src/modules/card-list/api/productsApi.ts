import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { api } from "utils/api";
import { TProductsResponse } from "../types/cardListTypes";

export class ProductsApi {

    fetchProducts(): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(RoutePath.products);
    }
}

export const apiProducts= new ProductsApi();