import { Button, styled, ThemeProvider } from "@mui/material";
import React from "react";
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import ChillFireTheme from "../../../util/theme";


const ButtonStyle = styled(Button)({
    color: ChillFireTheme.palette.primary.contrastText,
})

const AddLocationAltRoundedIconStyle = styled(AddLocationAltRoundedIcon)({
    color: ChillFireTheme.palette.secondary.main,
})

const LocationInfo = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
        <ButtonStyle startIcon={<AddLocationAltRoundedIconStyle/>}>Japan Kanazawa</ButtonStyle>
    </ThemeProvider>
    )
}

export default LocationInfo;