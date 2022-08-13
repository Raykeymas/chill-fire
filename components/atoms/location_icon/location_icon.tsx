import { styled } from "@mui/material";
import React from "react";
import ChillFireTheme from "../../../util/theme";
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import { Scale } from "@mui/icons-material";

type Props = {
    size?: string
}

export const AddLocationAltRoundedIconStyle = styled(AddLocationAltRoundedIcon)({
    color: ChillFireTheme.palette.secondary.main,
})

const LocationIcon = ({ size = "small" }: Props) => {

    let scale: string = "scale(1.0)"
    if (size == "medium") {
        scale = "scale(2.0)";
    } else if (size == "large") {
        scale = "scale(3.0)";
    }

    return <AddLocationAltRoundedIconStyle sx={{ transform: scale }}></AddLocationAltRoundedIconStyle>
}

export default LocationIcon;