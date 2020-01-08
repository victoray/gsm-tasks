import React from "react";
import {Map, Marker, GoogleApiWrapper} from "google-maps-react";
import {useSelector} from "react-redux";
import {Task} from "../api/types";

interface MapView {
    google: any;
}

const style = {
    height: "100%"
};

interface MarkerView {
    latitude: number;
    longitude: number;
}

const MapView = ({google}: MapView) => {
    const tasks = useSelector((state: any) => state.tasks);
    const bounds = new google.maps.LatLngBounds();

    return (
        <>
            {
                // @ts-ignore
                <Map google={google} style={style} initialCenter={{lat: 59.4370, lng: 24.7536}}
                     bounds={bounds}
                >
                    {tasks.map((task: Task, index: number) => {
                        if (!task.address.location) return;

                        const [long, lat] = task.address.location.coordinates;
                        bounds.extend({lat: lat, lng: long});
                        return <Marker position={{lat: lat, lng: long}} key={index}/>
                    })}
                </Map>
            }
        </>)
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDnMWN3ausAbrY5Kxmc2ZnPjtzBp27AST4")
})(MapView);
