import React from 'react';
import Base from './index';


export default {
    title: 'Inputs/Base',
    component: Base,
};

const Template = (args) => <div className="w-64"><Base {...args} /></div>

export const BaseInput = Template.bind({});

BaseInput.args = {
    label: "Email",
    placeholder: "Enter Email",
    helperText: "This is to help you"
};

export const ErrorInput = Template.bind({});

ErrorInput.args = {
    label: "Email",
    placeholder: "Enter Email",
    errorText: "Please input required email",
};


const DarkTemplate = (args) => <div className="w-1/2 dark bg-black p-4"><Base {...args} /></div>

export const DarkBaseInput = DarkTemplate.bind({});

DarkBaseInput.args = {
    label: "Email",
    placeholder: "Enter Email",
    helperText: "This is to help you"
};

export const DarkErrorInput = DarkTemplate.bind({});

DarkErrorInput.args = {
    label: "Email",
    placeholder: "Enter Email",
    errorText: ["Please input required email", "Another Error"]
};

