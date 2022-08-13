import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationIcon from "./location_icon";

const meta = {
    component: LocationIcon,
    title: "LocationIcon"
} as ComponentMeta<typeof LocationIcon>;

export default meta;

const Template: ComponentStory<typeof LocationIcon> = () => <LocationIcon />

export const Primary = Template.bind({});