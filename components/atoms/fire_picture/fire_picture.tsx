import { Box } from "@mui/material";
import React from "react";

type Props = {
    image: string
}

const FirePicture = (props: Props) => {
    return (
        <Box borderRadius="12px">
            <img alt="tes" src={props.image} style={{ maxWidth: "100%", borderRadius: "12px" }} />
        </Box>
    );
}


export default FirePicture;