import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FirePicture from "./fire_picture";

const meta = {
    component: FirePicture,
    title: "FirePicture"
}  as ComponentMeta<typeof FirePicture>;

export default meta;

const Template: ComponentStory<typeof FirePicture> = () => <FirePicture />

export const Primary = Template.bind({});