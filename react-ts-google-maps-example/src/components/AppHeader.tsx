import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const AppHeader = () => {
    return(
    <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}
            >
                React google maps integration example
            </Typography>
            </Toolbar>
        </AppBar>
        </Box>
        
    </>
    )
}

export default AppHeader;