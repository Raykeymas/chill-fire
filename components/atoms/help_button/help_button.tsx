import React, { useContext } from "react";
import { Fab, ThemeProvider, alpha, styled, createTheme } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ChillFireTheme from "../../../util/theme";
import { HelpDialogContext } from "../../../pages";

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
    backgroundColor: alpha(HelpTheme.palette.primary.main,0.3),
    "&:hover": {
        backgroundColor: alpha(HelpTheme.palette.primary.main,0.5),
    }
})

const QuestionMarkIconStyle = styled(QuestionMarkIcon)({
    color: ChillFireTheme.palette.background.default,
})


const HelpButton = () => {
    const {isOpen, setIsOpen} = useContext(HelpDialogContext);

    return (
        <ThemeProvider theme={HelpTheme}>
            <HelpButtonStyle color="primary" onClick={() => setIsOpen(!isOpen)}>
                <QuestionMarkIconStyle color="primary"></QuestionMarkIconStyle>
            </HelpButtonStyle>
        </ThemeProvider>
    )
}



export default HelpButton;