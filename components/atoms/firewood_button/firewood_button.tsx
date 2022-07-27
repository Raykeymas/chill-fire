import { Button, styled, ThemeProvider } from "@mui/material";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import React from "react";
import ChillFireTheme from "../../../util/theme";

const LocalFireDepartmentIconStyle = styled(LocalFireDepartmentIcon)({
    color: ChillFireTheme.palette.primary.main,
})

const ButtonStyle = styled(Button)({
    color    : ChillFireTheme.palette.primary.contrastText,
})

// TODO アイコン、処理は外部から与える
const FirewoodButton = () => {
    return (
        <ThemeProvider theme={ChillFireTheme}>
            <ButtonStyle startIcon={<LocalFireDepartmentIconStyle />}>1k+</ButtonStyle>
        </ThemeProvider>

    );
}

export default FirewoodButton;