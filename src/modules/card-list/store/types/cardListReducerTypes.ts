import { TABS_ID, TProductsResponse } from "modules/card-list/types/cardListTypes";

export type TCardListState = {
    data: TProductsResponse,
    errorState: string | null,
    currentSort: TABS_ID,
    loading: boolean
}