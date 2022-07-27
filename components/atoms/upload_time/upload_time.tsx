import React from "react";
import { Box, styled, ThemeProvider, Typography } from "@mui/material";
import ChillFireTheme from "../../../util/theme";

const TypographyStyle = styled(Typography)({
    color    : ChillFireTheme.palette.primary.contrastText,
})

const UploadTime = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
            <Box display={"inline-block"}>
            <TypographyStyle >1 second ago</TypographyStyle>

            </Box>
        </ThemeProvider>
    );
}


export default UploadTime;