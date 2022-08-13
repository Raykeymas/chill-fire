import { Button, styled, ThemeProvider } from "@mui/material";
import React from "react";
import ChillFireTheme from "../../../util/theme";
import LocationIcon from "../location_icon/location_icon";


const ButtonStyle = styled(Button)({
    color: ChillFireTheme.palette.primary.contrastText,
})


const LocationInfo = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
            <ButtonStyle color="secondary" startIcon={<LocationIcon />}>Japan Kanazawa</ButtonStyle>
        </ThemeProvider>
    )
}

export default LocationInfo;