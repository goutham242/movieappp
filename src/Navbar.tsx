import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar(){
    return(
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexgrow: 1}}>
                    Movie App

                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;