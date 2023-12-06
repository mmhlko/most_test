import { TRoutes } from "pages/types";
import { HomePage } from "./home-page/HomePage";
import { CatalogPage } from "./catalog-page/CatalogPage";

export const RoutePath = {
    home: "/",
    login: "/login",
    products: "/products",
    product: "/products/:productId"
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },
    { path: RoutePath.products, element: <CatalogPage /> },
]