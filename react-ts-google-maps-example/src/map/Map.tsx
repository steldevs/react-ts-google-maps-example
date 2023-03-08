import React from "react";

import { GoogleMap, DirectionsRenderer, DirectionsService, StreetViewPanorama } from '@react-google-maps/api';
import { Skeleton } from "@mui/material";

interface Props {
    gMapsApiStatus: boolean;
}

const containerStyle = {
    width: '100%',
    height: '350px'
};


interface Center {
    lat: number;
    lng: number;
}

const Map = ({gMapsApiStatus}: Props) => {

    const originalCenter = {
        lat: 34.9782017,
        lng: 33.0642318
    };
      
      const [directions, setDirections] = React.useState<any>(null);
      const [center, setCenter] = React.useState<Center>(originalCenter);

      return (
        <>
        {gMapsApiStatus ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                options={
                    {
                        streetViewControl: false, 
                        disableDefaultUI: true
                    }
                }
            >
                <DirectionsRenderer
                    directions={directions}
                />
            </GoogleMap>
        ) : 
            <Skeleton height={300} />
        }
        </>
      );

}


export default Map;