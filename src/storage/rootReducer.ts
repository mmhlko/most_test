import { cardListReducer } from "modules/card-list/store/cardListReducer";
import { cartReducer } from "modules/cart/store/cartReducer";
import { authReducer } from "modules/login/store/authReducer";
import { productReducer } from "modules/product/store/singleProductReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cardList: cardListReducer,
    singleProduct: productReducer,
    cart: cartReducer,
    user: authReducer,
})