import { TRoutes } from "pages/types";
import { HomePage } from "./home-page/HomePage";
import { CatalogPage } from "./catalog-page/CatalogPage";
import { SingleProductPage } from "./single-product-page/SingleProductPage";
import { CartPage } from "./cart-page/CartPage";
import { ProfilePage } from "./profile-page/ProfilePage";
import { LoginPage } from "./login-page/LoginPage";
import { ProtectedRoute } from "components/protected-route/ProtectedRoute";

export const RoutePath = {
    home: "/",
    login: "/login",
    products: "/products",
    product: "/products/:productId",
    cart: "/cart",
    profile: "/profile",
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },
    { path: RoutePath.products, element: <ProtectedRoute><CatalogPage /></ProtectedRoute> },
    { path: RoutePath.product, element: <ProtectedRoute><SingleProductPage /></ProtectedRoute> },
    { path: RoutePath.cart, element: <ProtectedRoute><CartPage /></ProtectedRoute> },
    { path: RoutePath.profile, element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
    { path: RoutePath.login, element: <ProtectedRoute onlyOnAuth><LoginPage /></ProtectedRoute> },
]