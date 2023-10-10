import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  title: "Components/Side Navigation/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageSrc: "../../../../public/resources/images/avatar.webp",
    imageAlt: "Eliran Teller (Image)",
    name: `Eliran Teller`,
    subtitle: "Software Developer",
  },
};
