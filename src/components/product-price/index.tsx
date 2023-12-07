import classnames from 'classnames';
import s from "./styles.module.scss";
import { calcDiscountPrice } from 'utils/products';

type TProductPriceProps = {
  discount: number,
  price: number,
  type: string,
  align?: string
}

export const ProductPrice = ({ discount, price, type, align = "left" }:TProductPriceProps) => {
  const discount_price = calcDiscountPrice(price, discount);

  return (
    <div className={classnames({ [s[`${type}Price`]]: type }, s.priceWrap)}>
      <span className={classnames({ [s.oldPrice]: discount, [s.price]: !discount, [s[align]]: align })}>{price}&nbsp;$</span>
      {discount !== 0 && <span className={classnames(s.price, s.priceDiscount)}>{discount_price}&nbsp;$</span>}
    </div>
  );
}