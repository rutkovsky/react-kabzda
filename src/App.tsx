import React, {useState} from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {Onoff} from './components/Onoff';
import ControlledAccordion from './components/Accordion/ControlledAccordion';

function App() {
let [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <Rating title={'Title 1'}/>
            <Rating title={'Title 2'}/>
            <Rating title={'Title 3'}/>
            <Onoff/>
            <Onoff/>
            <Accordion title={'Title'}/>
            <ControlledAccordion title={'Title'} setCollapsed={()=>{setCollapsed(!collapsed)}} collapsed={collapsed}/>
        </div>
    );
}

export default App;