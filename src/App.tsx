import React from 'react';
import './App.css';
import Map from "./Map";
import {Fragment as Frag} from "./Fragment";

function App() {
    return (
        <div>
            <Frag/>
            <input/>
            <Rating/>
            <Map/>
        </div>
    );
}

function RatingTitle() {
    return (
        <div>
            <h3>Top100</h3>
        </div>
    );
}function RatingBody() {
    return (
        <div>
            <ul>1</ul>
            <ul>2</ul>
            <ul>3</ul>
        </div>
    );
}
function Rating() {
    return (
        <div>
            <RatingTitle/>
            <RatingBody/>
        </div>
        )
}
export default App;
