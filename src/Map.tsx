import React from "react";

function Map() {
    console.log("Map rendering")
    return (
        <div>
            <MapTitle/>
            <MapBody/>
        </div>
    );
}
function MapTitle() {
    console.log("MapTitle rendering")
    return (
        <div>
            <h3>Map</h3>
        </div>
    );
}
function MapBody() {
    console.log("MapBody rendering")
    return (
        <div>
            <li>America <Star value={0}/></li>
            <li>Asia <Star value={1}/></li>
            <li>Europe <Star value={3}/></li>
            <li>Africa <Star value={5}/></li>
        </div>
    );
}

function Star(props: any) {
    console.log("Star rendering")
        if (props.value === 1) {
        return (
            <div>
                <Stars selected={true} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
            </div>
        );
    }
        if (props.value === 2) {
        return (
            <div>
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
            </div>
        );
    }
        if (props.value === 3) {
        return (
            <div>
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
            </div>
        );
    }
        if (props.value === 4) {
        return (
            <div>
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={false} />
            </div>
        );
    }
        if (props.value === 5) {
        return (
            <div>
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={true} />
                <Stars selected={true} />
            </div>
        );
    }
        else {
        return (
            <div>
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
                <Stars selected={false} />
            </div>
        );
    }
}
function Stars(props: any) {
    console.log("StarSelect rendering")
    if (props.selected === true) {
        return <span><b>Star</b></span>
    } else {
        return <span>Star</span>
    }
}

export default Map;
