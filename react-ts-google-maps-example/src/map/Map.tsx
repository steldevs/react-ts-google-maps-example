import { GoogleMap, DirectionsRenderer, DirectionsService, StreetViewPanorama } from '@react-google-maps/api';
import { Skeleton } from "@mui/material";
import { useEffect, useState } from 'react';

interface Props {
    gMapsApiStatus: boolean;
    mapDirections: google.maps.DirectionsResult | undefined;
}

const containerStyle = {
    width: '100%',
    height: '350px'
};


const Map = ({gMapsApiStatus, mapDirections}: Props) => {

    const [directions, setDirections] = useState<google.maps.DirectionsResult>();

    useEffect(() => {
        setDirections(mapDirections)
    },[mapDirections, setDirections]);

    const originalCenter = {
        lat: 51.5287718,
        lng: -0.2416822
    };

    console.log(mapDirections)
      
      return (
        <>
        {gMapsApiStatus ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={originalCenter}
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