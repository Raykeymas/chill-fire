import { Dialog, DialogContent, DialogTitle, ThemeProvider, styled, DialogContentText } from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useContext } from "react";
import HelpDialogContext from "../../../context/help_dialog_context";
import ChillFireTheme from "../../../util/theme";

const BoxStyle = styled(Box)({
    backgroundColor: ChillFireTheme.palette.background.default,
    padding: "80px",
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


const HelpDialog = () => {

    const { helpDialogIsOpen, setHelpDialogIsOpen } = useContext(HelpDialogContext);

    return <ThemeProvider theme={ChillFireTheme}>
        <Dialog open={helpDialogIsOpen} onClose={() => setHelpDialogIsOpen(false)} maxWidth="md" PaperProps={{ style: { backgroundColor: "transparent" } }}>
            <BoxStyle>
                <DialogTitleStyle>このサイトについて</DialogTitleStyle>
                <DialogContent><DialogContentTextStyle>このサイトは焚き火を愛するためにあります。</DialogContentTextStyle>
                    <DialogContentTextStyle>自分の焚き火を誰かに共有するもよし、</DialogContentTextStyle>
                    <DialogContentTextStyle>誰かの焚き火に火種を焚べるもよし、</DialogContentTextStyle>
                    <DialogContentTextStyle>みんなで火を灯し続けましょう。</DialogContentTextStyle></DialogContent>
            </BoxStyle></Dialog>
    </ThemeProvider>

}

export default HelpDialog;