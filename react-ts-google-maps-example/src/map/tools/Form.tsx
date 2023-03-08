import { Place, TripRoute } from "../../types";
import { useState } from "react";
import { Grid } from "@mui/material";
import PickupField from "./PickupField";


export interface LastSubmissionData {
    pickup: Place;
    dropoff: Place;
}

interface Props {
    gMapsApiStatus: boolean;
}

const Form = ({gMapsApiStatus}: Props) => {
    const [lastSubmission, setLastSubmission] = useState<LastSubmissionData | null>(null)
    
    return (
        <form>
            <Grid container spacing={1}>
                <PickupField gMapsApiStatus={gMapsApiStatus}  />
                <PickupField gMapsApiStatus={gMapsApiStatus}  />

            </Grid>
        </form>
    )

}

export default Form;