import type { Meta, StoryObj } from "@storybook/react";

import { FullScreen } from "@/components/FullScreen";

const meta: Meta<typeof FullScreen> = {
  component: FullScreen,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const String: Story = {
  args: {
    children: "Dark mode can be toggled by clicking the above button.",
  },
};
