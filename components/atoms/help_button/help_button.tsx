import React, { useContext } from "react";
import { Fab, ThemeProvider, alpha, styled, createTheme } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ChillFireTheme from "../../../util/theme";
import HelpDialogContext from "../../../context/help_dialog_context";

const HelpTheme = createTheme({
    palette: {
        primary: {
            light: "#7B7B7B",
            main: "#7B7B7B",
            dark: "#7B7B7B",
            contrastText: "#7B7B7B",
        }
    }
})

const HelpButtonStyle = styled(Fab)({
    backgroundColor: alpha(HelpTheme.palette.primary.main, 0.3),
    "&:hover": {
        backgroundColor: alpha(HelpTheme.palette.primary.main, 0.5),
    }
})

const QuestionMarkIconStyle = styled(QuestionMarkIcon)({
    color: ChillFireTheme.palette.background.default,
})


const HelpButton = () => {
    const { helpDialogIsOpen, setHelpDialogIsOpen } = useContext(HelpDialogContext);

    return (
        <ThemeProvider theme={HelpTheme}>
            <HelpButtonStyle color="primary" onClick={() => setHelpDialogIsOpen(!helpDialogIsOpen)}>
                <QuestionMarkIconStyle color="primary"></QuestionMarkIconStyle>
            </HelpButtonStyle>
        </ThemeProvider>
    )
}



export default HelpButton;