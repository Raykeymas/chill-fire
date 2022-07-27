import { Box, ImageList } from "@mui/material";
import React from "react";
import UploadButton from "../../atoms/upload_button/upload_button";
import FireItem from "../../moducule/fire_item/fire_item";
import FloatingButtons from "../../moducule/floating_buttons/floating_buttons";

const image_list = [
    "https://images.unsplash.com/photo-1618608273551-ea65b6429358?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070",
    "https://images.unsplash.com/photo-1629576728726-23f557c8010f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
    "https://images.unsplash.com/photo-1512059013936-9e0023f737b1?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387",
    "https://images.unsplash.com/photo-1519071711965-f84a1482a05e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
    "https://images.unsplash.com/photo-1475738972911-5b44ce984c42?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    "https://images.unsplash.com/photo-1568309315444-799f37a7fb6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
]

const FireItemList = () => {
    return (<><Box paddingLeft={"20px"} paddingRight={"20px"}>
        <ImageList variant="masonry" gap={20} cols={3}>
        {image_list.map((image,i) => {
            return <FireItem key={i} image={image}></FireItem>;
        })}
    </ImageList>
    </Box>
    <FloatingButtons></FloatingButtons></>)
}


export default FireItemList;