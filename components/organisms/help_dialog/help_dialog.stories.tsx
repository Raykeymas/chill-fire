import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HelpDialog from "./help_dialog";

const meta = {
    component: HelpDialog,
    title: "HelpDialog"
}  as ComponentMeta<typeof HelpDialog>;

export default meta;

const Template: ComponentStory<typeof HelpDialog> = () => <HelpDialog />

export const Primary = Template.bind({});