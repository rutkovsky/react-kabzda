type PropsType = {
    setOn: (on: boolean) => void
    on: boolean
}

export const ControlledOnoff = (props: PropsType) => {

    let onStyle = {
        backgroundColor: props.on ? 'green' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '2px',
        marginTop: '2px'
    }
    let offStyle = {
        backgroundColor: !props.on ? 'red' : 'white',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        marginTop: '2px'
    }
    let indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>{props.setOn(true)}}>On</div>
            <div style={offStyle} onClick={()=>{props.setOn(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>)
}