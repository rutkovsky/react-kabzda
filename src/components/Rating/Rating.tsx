import React, {useState} from 'react';
import Star from './Star';

type RatingPropsType = {
    title: string;
}

function Rating(props: RatingPropsType) {

    let [stars, setStars] = useState(1);

    if (stars === 1) return <div>
        <RatingTitle title1={props.title}/>
        <button onClick={() => {
            setStars(1)
        }}>1
        </button>
        <button onClick={() => {
            setStars(2)
        }}>2
        </button>
        <button onClick={() => {
            setStars(3)
        }}>3
        </button>
        <button onClick={() => {
            setStars(4)
        }}>4
        </button>
        <button onClick={() => {
            setStars(5)
        }}>5
        </button>
        <div>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    </div>
    if (stars === 2) return <div>
        <RatingTitle title1={props.title}/>
        <button onClick={() => {
            setStars(1)
        }}>1
        </button>
        <button onClick={() => {
            setStars(2)
        }}>2
        </button>
        <button onClick={() => {
            setStars(3)
        }}>3
        </button>
        <button onClick={() => {
            setStars(4)
        }}>4
        </button>
        <button onClick={() => {
            setStars(5)
        }}>5
        </button>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
    if (stars === 3) return <div>
        <RatingTitle title1={props.title}/>
        <button onClick={() => {
            setStars(1)
        }}>1
        </button>
        <button onClick={() => {
            setStars(2)
        }}>2
        </button>
        <button onClick={() => {
            setStars(3)
        }}>3
        </button>
        <button onClick={() => {
            setStars(4)
        }}>4
        </button>
        <button onClick={() => {
            setStars(5)
        }}>5
        </button>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
    </div>
    if (stars === 4) return <div>
        <RatingTitle title1={props.title}/>
        <button onClick={() => {
            setStars(1)
        }}>1
        </button>
        <button onClick={() => {
            setStars(2)
        }}>2
        </button>
        <button onClick={() => {
            setStars(3)
        }}>3
        </button>
        <button onClick={() => {
            setStars(4)
        }}>4
        </button>
        <button onClick={() => {
            setStars(5)
        }}>5
        </button>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
    </div>
    if (stars === 5) return <div>
        <RatingTitle title1={props.title}/>
        <button onClick={() => {
            setStars(1)
        }}>1
        </button>
        <button onClick={() => {
            setStars(2)
        }}>2
        </button>
        <button onClick={() => {
            setStars(3)
        }}>3
        </button>
        <button onClick={() => {
            setStars(4)
        }}>4
        </button>
        <button onClick={() => {
            setStars(5)
        }}>5
        </button>
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
                <button onClick={() => {
                    setStars(1)
                }}>1
                </button>
                <button onClick={() => {
                    setStars(2)
                }}>2
                </button>
                <button onClick={() => {
                    setStars(3)
                }}>3
                </button>
                <button onClick={() => {
                    setStars(4)
                }}>4
                </button>
                <button onClick={() => {
                    setStars(5)
                }}>5
                </button>
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

