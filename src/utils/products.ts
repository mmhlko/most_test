export const calcDiscountPrice = (price:number, discount:number) => Math.round(price * (1 - discount/100) )