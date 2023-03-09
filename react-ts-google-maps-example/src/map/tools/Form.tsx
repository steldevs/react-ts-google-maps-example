import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddressAutocomplete from "./AddressAutocomplete";
import calculateMatrix from "./CalculateMatrix";
import calculateDirections from "./CalculateDirections";

interface MatrixResponse {
    distance: string;
    duration: string;
}

interface Props {
    gMapsApiStatus: boolean;
    setMapDirections(directions: google.maps.DirectionsResult): void;
}

const Form = ({gMapsApiStatus, setMapDirections}: Props) => {

    const [pointA, setPointA] = useState<google.maps.places.PlaceResult>();
    const [pointB, setPointB] = useState<google.maps.places.PlaceResult>();
    const [matrix, setMatrix] = useState<MatrixResponse | null>(null);

    const onCalculate = async () => {
        if(pointA && pointB){
            const result = await calculateMatrix([pointA, pointB]);
            if(result) setMatrix(result);
        }
    }

    const onGetDirections = async () => {
        if(pointA && pointB){
            const result = await calculateDirections([pointA, pointB]);
            if(result) setMapDirections(result);
        }
    }
    
    return (
        <form>
            <Grid container spacing={1} sx={{paddingLeft: 1}}>
                <AddressAutocomplete gMapsApiStatus={gMapsApiStatus} setAddress={setPointA} label={"Point A"}  />
                <AddressAutocomplete gMapsApiStatus={gMapsApiStatus} setAddress={setPointB} label={"Point B"}  />
                <Button onClick={onCalculate} variant="contained" sx={{width: "100%", marginTop: 1}}>Calculate distance and duration</Button>
                <Button onClick={onGetDirections} variant="contained" sx={{width: "100%", marginTop: 1}}>Draw route on map</Button>
                {
                    matrix !== null ?
                    <Typography sx={{marginTop: 1}}>{`Distance: ${matrix.distance} miles. Duration: ${matrix.duration}`}</Typography>
                    :
                    null
                }
            </Grid>
        </form>
    )

}

export default Form;