import React, {useState} from 'react';
import Star from './Star';

type RatingPropsType = {
    title: string;
}

function Rating(props: RatingPropsType) {
    let [stars, setStars] = useState(0);
    return (
        <div>
            <Star selected={stars > 0} setStars={setStars} value={1}/>
            <Star selected={stars > 1} setStars={setStars} value={2}/>
            <Star selected={stars > 2} setStars={setStars} value={3}/>
            <Star selected={stars > 3} setStars={setStars} value={4}/>
            <Star selected={stars > 4} setStars={setStars} value={5}/>
        </div>
    )
}
export default Rating;