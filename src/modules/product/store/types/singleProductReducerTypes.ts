import { TCard } from "modules/card-list/types/cardListTypes";

export type TSingleProductState = {
    data: TCard,
    errorState: string | null,
    loading: boolean
}