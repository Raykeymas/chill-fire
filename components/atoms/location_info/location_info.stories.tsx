import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationInfo from "./location_info";

const meta = {
    component: LocationInfo,
    title: "LocationInfo"
}  as ComponentMeta<typeof LocationInfo>;

export default meta;

const Template: ComponentStory<typeof LocationInfo> = () => <LocationInfo />

export const Primary = Template.bind({});