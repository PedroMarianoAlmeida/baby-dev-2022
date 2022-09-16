import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import StackBadge from "src/components/StackBadge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "StackBadge",
  component: StackBadge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
} as ComponentMeta<typeof StackBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackBadge> = (args) => (
  <StackBadge {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: "Button",
};
