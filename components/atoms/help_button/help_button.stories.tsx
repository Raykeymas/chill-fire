import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HelpButton from "./help_button";

const meta = {
    component: HelpButton,
    title: "HelpButton"
}  as ComponentMeta<typeof HelpButton>;

export default meta;

const Template: ComponentStory<typeof HelpButton> = () => <HelpButton />

export const Primary = Template.bind({});