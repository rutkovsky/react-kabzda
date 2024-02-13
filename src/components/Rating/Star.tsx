import React from 'react';

type StarPropsType = {
    selected: boolean;
    setStars: (value: 1 | 2 | 3 | 4| 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

function Star(props: StarPropsType) {
    function OnClickSpanHandler() {
        props.setStars(props.value)
    }
    return <span onClick={OnClickSpanHandler}>{props.selected ? <b>star </b> : 'star '}</span>
}

export default Star;