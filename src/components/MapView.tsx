import React from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";

interface MapView {
    google: any;
}

const style = {
    height: "100%"
};
const MapView = ({google}: MapView) => {


    return (
        <>
            {
                // @ts-ignore
                <Map google={google} style={style} initialCenter={{lat: 59.4370, lng: 24.7536}}>
                    <Marker
                        position={{lat: 59.4370, lng: 24.7536}}/>
                </Map>
            }
        </>)
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDnMWN3ausAbrY5Kxmc2ZnPjtzBp27AST4")
})(MapView);
