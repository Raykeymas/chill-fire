import { Box, ImageListItem } from "@mui/material";
import Image from "next/image";
import React from "react";
import FireImage from "/public/rect.jpg"



const FirePicture = (props) => {
    return (
        <Box maxWidth={"600px"} borderRadius="12px">
            <img alt="tes" src={props.image} style={{maxWidth: "100%", borderRadius: "12px"}} />
        </Box>
    );
}


export default FirePicture;