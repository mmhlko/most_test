import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { api } from "utils/api";
//import { TProductsResponse } from "../types/cardListTypes";

export class SingleProductApi {

    fetchSingleProduct(id: number): Promise<AxiosResponse<any>> {
        return api.get(`${RoutePath.products}/${id}`);
    }
}

export const apiSingleProduct = new SingleProductApi();