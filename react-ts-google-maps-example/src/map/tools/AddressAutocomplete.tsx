import { Skeleton, Box, FormLabel, Grid, InputAdornment, TextField } from "@mui/material";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

interface Props {
    gMapsApiStatus: boolean;
    setAddress(place: google.maps.places.PlaceResult): void;
    label: string;
}


const AddressAutocomplete = ({gMapsApiStatus, setAddress, label}: Props) => {

    const [addressRef, setAddressRef] = useState<google.maps.places.SearchBox>();
    const onLoad = (ref: google.maps.places.SearchBox) => setAddressRef(ref);

    const onPickupChanged = () => {
        if(addressRef){
            const places = addressRef.getPlaces();
            if(places){
                setAddress(places[0])
            }
        }
    }

    return(
            <Grid item xs={12}>
                <Box sx={{width: '100%', textAlign: 'left', marginTop: "5px"}}>
                    <FormLabel>{label}</FormLabel>
                </Box>
                    {gMapsApiStatus ?
                        <StandaloneSearchBox
                            onLoad={onLoad}
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

export default AddressAutocomplete;