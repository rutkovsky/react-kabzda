import React from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {Onoff} from './components/Onoff';

function App() {
    return (
        <div>
            <Rating title={'Title 1'}/>
            <Rating title={'Title 2'}/>
            <Rating title={'Title 3'}/>
            {/*<Accordion colapsed={false}/>*/}
            {/*<Accordion colapsed={true}/>*/}
            <Onoff/>
            <Onoff/>

        </div>
    );
}

export default App;