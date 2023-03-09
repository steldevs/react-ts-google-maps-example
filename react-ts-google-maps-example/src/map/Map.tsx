import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api';
import { Skeleton } from "@mui/material";

interface Props {
    gMapsApiStatus: boolean;
    mapDirections: google.maps.DirectionsResult | undefined;
}

const containerStyle = {
    width: '100%',
    height: '350px'
};


const Map = ({gMapsApiStatus, mapDirections}: Props) => {

    const originalCenter = {
        lat: 51.5287718,
        lng: -0.2416822
    };
      
      return (
        <>
        {gMapsApiStatus ? (
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={originalCenter}
                zoom={8}
            >
                {mapDirections ?
                    <DirectionsRenderer directions={mapDirections} />
                : null }
            </GoogleMap>
        ) : 
            <Skeleton height={300} />
        }
        </>
      );

}


export default Map;