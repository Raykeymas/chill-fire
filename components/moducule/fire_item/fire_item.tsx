import { Box, Card, Grid, ImageListItem } from "@mui/material";
import React from "react";
import FirewoodButton from "../../atoms/firewood_button/firewood_button";
import FirePicture from "../../atoms/fire_picture/fire_picture";
import LocationInfo from "../../atoms/location_info/location_info";
import UploadTime from "../../atoms/upload_time/upload_time";

const FireItem = (props) => {
    return (
    <ImageListItem>
        <FirePicture image={props.image}></FirePicture>
        <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
            <FirewoodButton></FirewoodButton>
            <LocationInfo></LocationInfo>
            <Box marginLeft={"auto"}>
                <UploadTime></UploadTime>
            </Box>
        </Box>
    </ImageListItem>)
}


export default FireItem;