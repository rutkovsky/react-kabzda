import {useState} from 'react';

type ControlledAccordionPropsType = {
    title: string
    setCollapsed: () => void
    collapsed: boolean
}

const ControlledAccordion = (props: ControlledAccordionPropsType) => {

    return (
        <div>
            <h3 onClick={props.setCollapsed}>{props.title}</h3>
            {props.collapsed ? <ControlledAccordionBody/> : ''}
        </div>
    )
}

export default ControlledAccordion;

const ControlledAccordionBody = () => {
    return (
        <div>
            <ul>a</ul>
            <ul>b</ul>
            <ul>c</ul>
        </div>
    )
}