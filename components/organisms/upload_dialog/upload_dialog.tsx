import { Dialog, DialogContent, DialogTitle, ThemeProvider, styled, DialogContentText, Button } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import HelpDialogContext from "../../../context/help_dialog_context";
import UploadDialogContext from "../../../context/upload_dialog_context";
import ChillFireTheme from "../../../util/theme";
import CloseButton from "../../atoms/close_button/close_button";
import FirePicture from "../../atoms/fire_picture/fire_picture";
import LocationIcon from "../../atoms/location_icon/location_icon";

const MailBoxStyle = styled(Box)({
    backgroundColor: ChillFireTheme.palette.background.default,
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
})

const DialogContentStyle = styled(DialogContent)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
})

const LocationButtonStyle = styled(Button)({
    width: "100%",
})

const CloseButtonBoxStyle = styled(Box)({
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "top",
})

const UploadDialog = () => {

    const { uploadDialogState, setUploadDialogState } = useContext(UploadDialogContext);
    const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null | undefined>("");

    useEffect(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const url = event.target?.result;
            setImageUrl(url);
        }
        if (uploadDialogState.file) {
            reader.readAsDataURL(uploadDialogState.file)
        }
    }, [uploadDialogState.file])

    return <ThemeProvider theme={ChillFireTheme}>
        <Dialog open={uploadDialogState.isOpen} onClose={() => setUploadDialogState({ isOpen: false, file: undefined })} maxWidth="sm" PaperProps={{ style: { backgroundColor: "transparent" } }}>
            <MailBoxStyle>
                <DialogContentStyle>
                    <CloseButtonBoxStyle>
                        <CloseButton onClick={() => setUploadDialogState({ isOpen: false, file: undefined })} />
                    </CloseButtonBoxStyle>
                    <FirePicture image={imageUrl as string}></FirePicture>
                    <LocationButtonStyle color="secondary" sx={{ height: "80px" }} startIcon={<LocationIcon size="large" />}></LocationButtonStyle>
                </DialogContentStyle>
            </MailBoxStyle></Dialog>
    </ThemeProvider>

}

export default UploadDialog;