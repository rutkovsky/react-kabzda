import React from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';

function App() {
    console.log('App rendering')
    return (
        <div>
            <Rating stars={0} title={'Title 1'}/>
            <Rating stars={1} title={'Title 2'}/>
            <Rating stars={3} title={'Title 3'}/>
            <Accordion colapsed = {false}/>
            <Accordion colapsed = {true}/>
        </div>
    );
}

export default App;