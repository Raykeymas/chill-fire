import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CLoseButton from "./close_button";

const meta = {
    component: CLoseButton,
    title: "CLoseButton"
} as ComponentMeta<typeof CLoseButton>;

export default meta;

const Template: ComponentStory<typeof CLoseButton> = () => <CLoseButton />

export const Primary = Template.bind({});