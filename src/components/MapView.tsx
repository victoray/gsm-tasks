import React from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";

interface MapView {
    google: any;
}

const style = {
    width: "66.67%",
    height: "100%"
};
const MapView = ({google}: MapView) => {

    return (
        <div className="map">
            {
                // @ts-ignore
                <Map google={google} style={style}/>
            }
        </div>)
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDnMWN3ausAbrY5Kxmc2ZnPjtzBp27AST4")
})(MapView);
