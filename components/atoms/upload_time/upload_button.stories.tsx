import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UploadTime from "./upload_time";

const meta = {
    component: UploadTime,
    title: "UploadTime"
}  as ComponentMeta<typeof UploadTime>;

export default meta;

const Template: ComponentStory<typeof UploadTime> = () => <UploadTime />

export const Primary = Template.bind({});