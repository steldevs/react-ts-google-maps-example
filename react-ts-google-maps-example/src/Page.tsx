import { Card,Grid, Box, Typography, Input } from "@mui/material";
import { IGMapsApiStatus } from "./types";
import { useScript } from "./utils/ExternalScriptProvider";
import Map from "./map/Map";

const SamplePage = () => {

    const GMapsApiStatus: IGMapsApiStatus = useScript(
        `https://maps.googleapis.com/maps/api/js?key=&libraries=places`
    );

    return(
        <>
        <Card sx={{paddingLeft: 5, paddingRight: 5, paddingTop: 5, marginTop: 5, backgroundColor: '#fff', paddingBottom: 2}}>
            <Typography>This is an example of Google maps integration with React hooks. Places API, Matrix API and Distance API demo.</Typography>
            <Grid container spacing={0} sx={{flexDirection: { xs: "column", md: "row"}, marginTop: 5}}>
            
                <Grid item md={6}>
                    <Map 
                        gMapsApiStatus={GMapsApiStatus.status === "ready"} 
                    />
                </Grid>
                <Grid item md={6} sx={{marginBottom: 1}}>
                    <Box sx={{}}>
                        <Typography variant="h6">Tools</Typography>
                        
                    </Box>
                </Grid>
            </Grid>
        </Card>
        </>
    )
}

export default SamplePage;