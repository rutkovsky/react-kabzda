type AccordionPropsType = {
    colapsed: boolean;
}

function Accordion(props: AccordionPropsType) {
    if (props.colapsed === false) {
        return (
            <div>
                <ul>a</ul>
                <ul>b</ul>
                <ul>c</ul>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export default Accordion;