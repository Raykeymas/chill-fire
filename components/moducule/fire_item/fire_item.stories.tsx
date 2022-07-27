import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FireItem from "./fire_item";

const meta = {
    component: FireItem,
    title: "FireItem"
}  as ComponentMeta<typeof FireItem>;

export default meta;

const Template: ComponentStory<typeof FireItem> = () => <FireItem />

export const Primary = Template.bind({});