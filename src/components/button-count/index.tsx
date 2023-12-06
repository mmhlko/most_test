import s from './styles.module.css';
import { FocusEvent, useState } from 'react';
import { useEffect } from 'react';

type TButtonCountProps = {
  amount: number, 
  handleIncrement?: () => void, 
  handleDecrement?: () => void, 
  handleCountChange?: (count:number) => void,
}

const ButtonCount = ({ amount = 0, handleIncrement, handleDecrement, handleCountChange }: TButtonCountProps) => {
  const [value, setValue] = useState<number>(0);
  const MIN_COUNT_IN_CART = 1;

  function handleBlurInput(e: FocusEvent<HTMLInputElement>) {
    const countInCart = Number(e.target.value);
    if (countInCart > 0) {
      handleCountChange(countInCart)
    } else {
      handleCountChange(MIN_COUNT_IN_CART);
    }
  }

  function handleChangeInput(e: FocusEvent<HTMLInputElement>) {
    const countInCart = Number(e.target.value);
    if (countInCart > 0) {
      setValue(countInCart)
    } else {
      setValue(MIN_COUNT_IN_CART);
    }
  }

  useEffect(() => {
    setValue(amount)
  }, [amount])

  return (
    <div className={s.wrap}>
      <button
        className={s.minus}
        disabled={value <= 1}
        onClick={() => {
          handleDecrement && handleDecrement();
          setValue(prevState => prevState - 1)
        }}>-</button>
      <input type="number" className={s.num} value={value} onChange={handleChangeInput} onBlur={handleBlurInput} />
      <button
        className={s.plus}
        onClick={() => {
          handleIncrement && handleIncrement();
          setValue(prevState => prevState + 1)
        }}>+</button>
    </div>
  )
}

export default ButtonCount;
