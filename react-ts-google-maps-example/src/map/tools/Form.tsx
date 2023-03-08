import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import AddressAutocomplete from "./AddressAutocomplete";
import calculateMatrix from "./CalculateMatrix";


interface MatrixResponse {
    distance: string;
    duration: string;
}

interface Props {
    gMapsApiStatus: boolean;
}

const Form = ({gMapsApiStatus}: Props) => {

    const [pointA, setPointA] = useState<google.maps.places.PlaceResult>();
    const [pointB, setPointB] = useState<google.maps.places.PlaceResult>();
    const [matrix, setMatrix] = useState<MatrixResponse | null>(null);

    const onCalculate = async () => {
        if(pointA && pointB){
            const result = await calculateMatrix([pointA, pointB]);
            if(result) setMatrix(result);
        }
    }
    
    return (
        <form>
            <Grid container spacing={1} sx={{paddingLeft: 1}}>
                <AddressAutocomplete gMapsApiStatus={gMapsApiStatus} setAddress={setPointA} label={"Point A"}  />
                <AddressAutocomplete gMapsApiStatus={gMapsApiStatus} setAddress={setPointB} label={"Point B"}  />
                <Button onClick={onCalculate} variant="contained" sx={{width: "100%", marginTop: 1}}>Calculate distance and duration</Button>
                {
                    matrix !== null ?
                    <Typography>{`Distance: ${matrix.distance} miles. Duration: ${matrix.duration}`}</Typography>
                    :
                    null
                }
            </Grid>
        </form>
    )

}

export default Form;