import React from 'react';

type StarPropsType = {
    selected: boolean;
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>STAR </b></span>
    } else {
        return <span>STAR </span>
    }

}

export default Star;