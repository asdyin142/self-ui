import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Buttons } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/demoButtons",
  component: Buttons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Buttons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Buttons",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Buttons",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Buttons",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Buttons",
};
