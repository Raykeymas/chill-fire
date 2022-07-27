import { createTheme } from "@mui/material";
import "typeface-cormorant";


const ChillFireTheme = createTheme({
    palette: {
        primary: {
            light: "#CD5D45",
            main: "#A03C27",
            dark: "#CD5D45",
            contrastText: "#7B7B7B",
        },
        secondary: {
            light: "#346751",
            main: "#346751",
            dark: "#346751",
        },
        background: {
            default: "#161616",
        }
    },
    typography: {
        fontFamily: ['Anton',"Apple Color Emoji",
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',].join(",")
    }
});


export default ChillFireTheme;