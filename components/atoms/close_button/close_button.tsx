import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Button, IconButton, ThemeProvider } from "@mui/material";
import ChillFireTheme from "../../../util/theme";

type Props = {
    onClick: Function
}

const CloseButton = (props: Props) => {
    return <ThemeProvider theme={ChillFireTheme}>
        <IconButton onClick={() => { props.onClick() }}><CloseRoundedIcon sx={{ color: ChillFireTheme.palette.primary.contrastText }} /></IconButton>
    </ThemeProvider>
}

export default CloseButton;