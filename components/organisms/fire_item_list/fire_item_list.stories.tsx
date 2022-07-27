import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FireItemList from "./fire_item_list";

const meta = {
    component: FireItemList,
    title: "FireItemList"
}  as ComponentMeta<typeof FireItemList>;

export default meta;

const Template: ComponentStory<typeof FireItemList> = () => <FireItemList />

export const Primary = Template.bind({});