import React, { useContext } from "react";
import { Fab, ThemeProvider, alpha, styled } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ChillFireTheme from "../../../util/theme";
import UploadDialogContext from "../../../context/upload_dialog_context";

const UploadButtonStyle = styled(Fab)({
    backgroundColor: alpha(ChillFireTheme.palette.primary.main, 0.3),
    // margin: 0,
    // top: 'auto',
    // right: 40,
    // bottom: 40,
    // left: 'auto',
    // position: 'fixed',
    "&:hover": {
        backgroundColor: alpha(ChillFireTheme.palette.primary.main, 0.5),
    }
})

const LocalFireDepartmentIconStyle = styled(LocalFireDepartmentIcon)({
    color: ChillFireTheme.palette.primary.main,
})


const UploadButton = () => {

    const { uploadDialogIsOpen, setUploadDialogIsOpen } = useContext(UploadDialogContext)

    return (
        <ThemeProvider theme={ChillFireTheme}>
            <UploadButtonStyle color="primary" onClick={() => setUploadDialogIsOpen(!uploadDialogIsOpen)}>
                <LocalFireDepartmentIconStyle color="primary"></LocalFireDepartmentIconStyle>
            </UploadButtonStyle>
        </ThemeProvider>
    )
}



export default UploadButton;