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
    DISCOUNT = "discountPercentage",
    RATING = "rating",
}
export type Tab = {
    id: string,
    title: string,
}

export const TABS: Tab[] = [
    {
        id: TABS_ID.PRICE,
        title: "Price",
    },
    {
        id: TABS_ID.DISCOUNT,
        title: "Discount",
    },
    {
        id: TABS_ID.RATING,
        title: "Rating"
    },
]