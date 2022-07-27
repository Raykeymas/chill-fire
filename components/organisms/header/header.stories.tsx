import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from "./header";

const meta = {
    component: Header,
    title: "Header"
}  as ComponentMeta<typeof Header>;

export default meta;

const Template: ComponentStory<typeof Header> = () => <Header />

export const Primary = Template.bind({});