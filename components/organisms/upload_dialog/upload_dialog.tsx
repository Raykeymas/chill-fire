import { Dialog, DialogContent, DialogTitle, ThemeProvider, styled, DialogContentText, Button } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useContext } from "react";
import HelpDialogContext from "../../../context/help_dialog_context";
import UploadDialogContext from "../../../context/upload_dialog_context";
import ChillFireTheme from "../../../util/theme";
import FirePicture from "../../atoms/fire_picture/fire_picture";
import { AddLocationAltRoundedIconStyle } from "../../atoms/location_info/location_info";

const BoxStyle = styled(Box)({
    backgroundColor: ChillFireTheme.palette.background.default,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
})

const DialogTitleStyle = styled(DialogTitle)({
    color: ChillFireTheme.palette.primary.contrastText,
    paddingBottom: "60px"
})

const DialogContentTextStyle = styled(DialogContentText)({
    color: ChillFireTheme.palette.primary.contrastText,
    textAlign: "center",
    lineHeight: "2em"
})


const UploadDialog = () => {

    const { uploadDialogIsOpen, setUploadDialogIsOpen } = useContext(UploadDialogContext);

    return <ThemeProvider theme={ChillFireTheme}>
        <Dialog open={uploadDialogIsOpen} onClose={() => setUploadDialogIsOpen(false)} maxWidth="md" PaperProps={{ style: { backgroundColor: "transparent" } }}>
            <BoxStyle>
                <DialogContent>
                    <FirePicture image={"https://images.unsplash.com/photo-1618608273551-ea65b6429358?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070"}></FirePicture>
                    <Button startIcon={<AddLocationAltRoundedIconStyle />}></Button>
                </DialogContent>
            </BoxStyle></Dialog>
    </ThemeProvider>

}

export default UploadDialog;