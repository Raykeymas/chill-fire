import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FirewoodButton from "./firewood_button";

const meta = {
    component: FirewoodButton,
    title: "FirewoodButton"
}  as ComponentMeta<typeof FirewoodButton>;

export default meta;

const Template: ComponentStory<typeof FirewoodButton> = () => <FirewoodButton />

export const Primary = Template.bind({});