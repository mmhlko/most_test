export type TCard = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export type TProductsResponse = {
    products: TCard[],
    total: number,
    skip: number,
    limit: number
}

export enum TABS_ID {
    PRICE = "price",
    DISCOUNT = "discount",
    RATING = "rating",
}
export type Tab = {
    id: string,
    title: string,
}

export const TABS: Tab[] = [
    {
        id: TABS_ID.PRICE,
        title: "По цене",
    },
    {
        id: TABS_ID.DISCOUNT,
        title: "По размеру скидки",
    },
    {
        id: TABS_ID.RATING,
        title: "По рейтингу"
    },
]