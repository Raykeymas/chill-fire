import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FloatingButtons from "./floating_buttons";

const meta = {
    component: FloatingButtons,
    title: "FloatingButtons"
}  as ComponentMeta<typeof FloatingButtons>;

export default meta;

const Template: ComponentStory<typeof FloatingButtons> = () => <FloatingButtons />

export const Primary = Template.bind({});