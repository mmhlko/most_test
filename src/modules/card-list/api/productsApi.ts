import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { api } from "utils/api";
import { TProductsResponse } from "../types/cardListTypes";

export class ProductsApi {

    fetchProducts(): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(RoutePath.products);
    }

    fetchLimitProducts(startItem: number, endItem: number): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(`${RoutePath.products}/?limit=${endItem}&skip=${startItem}`);
    }

    fetchProductsCategories(): Promise<AxiosResponse<string[]>> {
        return api.get(`${RoutePath.products}/categories`);
    }

    fetchProductsByCategory(category: string): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(`${RoutePath.products}/category/${category}`);
    }

    fetchSearchProducts(value: string): Promise<AxiosResponse<TProductsResponse>> {
        return api.get(`${RoutePath.products}/search?q=${value}`);
    }
}

export const apiProducts= new ProductsApi();