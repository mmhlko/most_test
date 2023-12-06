import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { api } from "utils/api";
import { TProductsResponse } from "../types/cardListTypes";

export class ProductsApi {

    fetchSpots(): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(RoutePath.products);
    }
}

export const apiSpots = new ProductsApi();