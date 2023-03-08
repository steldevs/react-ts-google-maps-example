import { Skeleton, Box, FormLabel, Grid, InputAdornment, TextField } from "@mui/material";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from '@fortawesome/free-solid-svg-icons'


interface Props {
    gMapsApiStatus: boolean;
}

const PickupField = ({gMapsApiStatus}: Props) => {

    const [pickupRef, setPickupRef] = useState<any>();
    const onPickupLoad = (ref: any) => setPickupRef(ref);

    const onPickupChanged = () => {
        if(pickupRef !== undefined){
            const pickupLoc = pickupRef.getPlaces();

        }
    }


    return(
            <Grid item xs={12}>
                <Box sx={{width: '100%', textAlign: 'left', marginTop: "5px"}}>
                    <FormLabel>Pick up point</FormLabel>
                </Box>
                    {gMapsApiStatus ?
                        <StandaloneSearchBox
                            onLoad={onPickupLoad}
                            onPlacesChanged={onPickupChanged}
                            bounds={
                                new google.maps.LatLngBounds(
                                    new google.maps.LatLng(49.906404, -5.744317),
                                    new google.maps.LatLng(55.722192, 2.340094)
                                )
                            }
                        >
                            <TextField 
                                sx={{width: "100%"}} 
                                placeholder="Post code or address"
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position='end'>
                                        <FontAwesomeIcon icon={faMapPin}/>
                                      </InputAdornment>
                                    ),
                                }}
                            />   
                        </StandaloneSearchBox>
                    : 
                        <Skeleton sx={{height: "56px"}}/>
                    }
            </Grid>
    )
}

export default PickupField;