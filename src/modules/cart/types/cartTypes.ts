export type TUserCarts = {
    carts: TSingleCart[],
    total: number,
    skip: number,
    limit: number
}

export type TSingleCart = {
    id: number,
    products: TCartProduct[],
    total: number,
    discountedTotal: number,
    userId: number
    totalProducts: number,
    totalQuantity: number
}

export type TCartProduct = {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number,
    thumbnail: string
}