import s from './styles.module.scss';
import StarIcon from './img/star.svg';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const MAX_COUNT_RATING = 5;

type TRatingProps = {
    currentRating: number, 
}

const Rating = ({ currentRating }: TRatingProps) => {

    const [ratingArray, setRatingArray] = useState(new Array(MAX_COUNT_RATING).fill(<></>))

    const constructRating = (filledRating:number) => {

        const updateRatingArray = ratingArray.map((_, i) => {
            return (
                <StarIcon className={classNames(s.star, 
                    {
                        [s.filled]: filledRating > i,
                    })}                    
                />
            )
        } )
        
        setRatingArray(updateRatingArray)
    }

    useEffect(() => constructRating(currentRating), [currentRating])

    return ( 
    <div className='rating__container'>
        {ratingArray.map((star, i) => <span key={i}>{star}</span>)}
    </div>
     );
}

export default Rating;