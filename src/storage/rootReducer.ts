import { cardListReducer } from "modules/card-list/store/cardListReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cardList: cardListReducer,
})