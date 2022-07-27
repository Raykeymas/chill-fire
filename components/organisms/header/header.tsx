import React from "react";
import { AppBar, styled, ThemeProvider, Typography } from "@mui/material";
import ChillFireTheme from "../../../util/theme";


const AppBarStyle = styled(AppBar)({
    backgroundColor: ChillFireTheme.palette.background.default
});

const Header = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
            <AppBarStyle position="static">
                <Typography variant="h4" sx={{p: 3}}>
                    Chill Fire
                </Typography>
            </AppBarStyle>
        </ThemeProvider>
    )
}

export default Header;