import React, { useState } from "react";
import Base from "./index";

export default {
  title: "Inputs/Base",
  component: Base,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  const formatDate = () => {
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    var maxDate = year + "-" + month + "-" + day;
    return maxDate;
  };
  return (
    <div className="w-64">
      <Base
        {...args}
        max={formatDate(new Date())}
        defaultValue={value}
        onChange={(val) => setValue(val)}
      />
    </div>
  );
};

export const BaseInput = Template.bind({});

BaseInput.args = {
  type: "date",
  label: "Date",
  placeholder: "",
  helperText: "This is to help you",
  //   max: new Date(),
};

export const ErrorInput = Template.bind({});

ErrorInput.args = {
  label: "Email",
  placeholder: "Enter Email",
  errorText: "Please input required email",
};

const DarkTemplate = (args) => (
  <div className="w-1/2 dark bg-black p-4">
    <Base {...args} />
  </div>
);

export const DarkBaseInput = DarkTemplate.bind({});

DarkBaseInput.args = {
  label: "Email",
  placeholder: "Enter Email",
  helperText: "This is to help you",
};

export const DarkErrorInput = DarkTemplate.bind({});

DarkErrorInput.args = {
  label: "Email",
  placeholder: "Enter Email",
  errorText: ["Please input required email", "Another Error"],
};
