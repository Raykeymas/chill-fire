import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UploadButton from "./upload_button";

const meta = {
    component: UploadButton,
    title: "UploadButton"
}  as ComponentMeta<typeof UploadButton>;

export default meta;

const Template: ComponentStory<typeof UploadButton> = () => <UploadButton />

export const Primary = Template.bind({});