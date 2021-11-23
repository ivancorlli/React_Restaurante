import React from 'react';
import { GoogleMap,withScriptjs,withGoogleMap } from "react-google-maps";

const Map = (props) => {

    let ubiLat = props.latitud
    let ubiLng = props.longitud

    return (
        <GoogleMap 
        defaultZoom={17}
        defaultCenter={{lat: ubiLat, lng: ubiLng}}  />
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
);