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

const MarkerView = React.memo(({latitude, longitude}: MarkerView) => {
    return <Marker position={{lat: latitude, lng: longitude}}/>
}, (prev, next) => {
    return prev.longitude !== next.longitude && prev.latitude !== next.latitude;
});

const MapView = ({google}: MapView) => {
    const tasks = useSelector((state: any) => state.tasks);

    return (
        <>
            {
                // @ts-ignore
                <Map google={google} style={style} initialCenter={{lat: 59.4370, lng: 24.7536}}
                     zoom={8}>
                    {tasks.map((task: Task, index: number) => {
                        if (!task.address.location) return;

                        const [long, lat] = task.address.location.coordinates;

                        return <Marker position={{lat: lat, lng: long}} key={index}/>
                    })}
                </Map>
            }
        </>)
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDnMWN3ausAbrY5Kxmc2ZnPjtzBp27AST4")
})(MapView);
