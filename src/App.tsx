import React, {useState} from 'react';
import './App.css';
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {Onoff} from './components/OnOff/Onoff';
import ControlledAccordion from './components/Accordion/ControlledAccordion';
import {ControlledOnoff} from './components/OnOff/ControlledOnoff';

function App() {
    let [collapsed, setCollapsed] = useState(true)
    let [on, setOn] = useState(false)

    return (
        <div>
            <Rating title={'Title 1'}/>
            <Rating title={'Title 2'}/>
            <Rating title={'Title 3'}/>
            <Onoff/>
            <ControlledOnoff on={on} setOn={setOn}/>
            <Accordion title={'Title'}/>
            <ControlledAccordion title={'Title'} setCollapsed={() => {
                setCollapsed(!collapsed)
            }} collapsed={collapsed}/>
        </div>
    );
}

export default App;