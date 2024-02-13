import {useState} from 'react';

type AccordionPropsType = {
    title: string
}

const Accordion = (props: AccordionPropsType) => {
    let [collapsed, setCollapsed] = useState(true)

    function OnClickButtonHandler() {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <h3 onClick={OnClickButtonHandler}>{props.title}</h3>
            {collapsed ? <AccordionBody/> : ''}
        </div>
    )
}

export default Accordion;

const AccordionBody = () => {
    return (
        <div>
            <ul>a</ul>
            <ul>b</ul>
            <ul>c</ul>
        </div>
    )
}