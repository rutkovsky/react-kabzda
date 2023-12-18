import React from 'react';
import './App.css';

function App() {
    console.log('App rendering')
    return (
        <div>
            123
            <Rating/>
        </div>
    );
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <RatingTitle/>
            <Star/>
            <RatingBody/>
        </div>
    )
}

export default App;

function Star() {
    console.log('Star rendering')
    debugger
    return (
        <div>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
            <div>STAR</div>
        </div>
    )
}

function RatingTitle() {
    console.log('RatingTitle rendering')
    return <>Rating Title</>
}

function RatingBody() {
    console.log('RatingBody rendering')
    return (
        <div>
            Body1
            Body2
            Body3
        </div>
    )
}