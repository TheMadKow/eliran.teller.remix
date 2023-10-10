import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

import Links from "./Links";

const dataLinks = [
  { id: "about", title: "About Me", url: "/about" },
  { id: "resume", title: "Resume", url: "/resume" },
];

const meta = {
  title: "Components/Side Navigation/Links",
  component: Links,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof Links>;

export const Default: Story = {
  args: {
    links: dataLinks,
  },
};

export const About: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/about",
      },
    }),
  },
  args: {
    links: dataLinks,
  },
};

export const Resume: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/resume",
      },
    }),
  },
  args: {
    links: dataLinks,
  },
};
