import React from 'react';
import Star from './Star';

type RatingPropsType = {
    stars: number;
    title: string;
}

function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    if (props.stars === 1) return <div>
        <RatingTitle title1={props.title}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
    if (props.stars === 2) return <div>
        <RatingTitle title1={props.title}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
    if (props.stars === 3) return <div>
        <RatingTitle title1={props.title}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
    if (props.stars === 4) return <div>
        <RatingTitle title1={props.title}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
    </div>
    if (props.stars === 5) return <div>
        <RatingTitle title1={props.title}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
    </div>
    else {
        return (
            <div>
                <RatingTitle title1={props.title}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )
    }
}
export default Rating;

type RatingTitlePropsType = {
    title1: string;
}

export function RatingTitle(props: RatingTitlePropsType) {
    console.log('RatingTitle rendering')
    return <h1>{props.title1}</h1>
}

