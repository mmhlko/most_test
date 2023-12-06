import { cardListReducer } from "modules/card-list/store/cardListReducer";
import { productReducer } from "modules/product/store/singleProductReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cardList: cardListReducer,
    singleProduct: productReducer
})