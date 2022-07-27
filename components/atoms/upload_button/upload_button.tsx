import React from "react";
import { Fab, ThemeProvider, alpha, styled } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ChillFireTheme from "../../../util/theme";

const UploadButtonStyle = styled(Fab)({
    backgroundColor: alpha(ChillFireTheme.palette.primary.main,0.3),
    // margin: 0,
    // top: 'auto',
    // right: 40,
    // bottom: 40,
    // left: 'auto',
    // position: 'fixed',
    "&:hover": {
        backgroundColor: alpha(ChillFireTheme.palette.primary.main,0.5),
    }
})

const LocalFireDepartmentIconStyle = styled(LocalFireDepartmentIcon)({
    color: ChillFireTheme.palette.primary.main,
})


const UploadButton = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
            <UploadButtonStyle color="primary">
                <LocalFireDepartmentIconStyle color="primary"></LocalFireDepartmentIconStyle>
            </UploadButtonStyle>
        </ThemeProvider>
    )
}



export default UploadButton;