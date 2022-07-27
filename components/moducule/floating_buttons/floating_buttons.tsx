import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HelpButton from "../../atoms/help_button/help_button";
import UploadButton from "../../atoms/upload_button/upload_button";


const FloatingButtonsStyle = styled(Box)({
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
})


const FloatingButtons = () => {
    return <FloatingButtonsStyle>
        <UploadButton></UploadButton>
        <Box height={"12px"}></Box>
        <HelpButton></HelpButton>
    </FloatingButtonsStyle>;
}


export default FloatingButtons;