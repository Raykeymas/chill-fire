import { Box, styled, ThemeProvider } from "@mui/system";
import Header from "../organisms/header/header";
import ChillFireTheme from "../../util/theme";
import { CssBaseline } from "@mui/material";

const BaseBox = styled(Box)({
    backgroundColor: ChillFireTheme.palette.background.default
});

const Layout = (props: any) => {
    return (
        <>
            <Header />
            <BaseBox >{props.children}</BaseBox>
        </>
    )
}

export default Layout;