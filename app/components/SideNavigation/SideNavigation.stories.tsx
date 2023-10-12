import type { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-react-router-v6";

import SideNavigation from "./SideNavigation";

const dataLinks = [
  {
    id: "about",
    title: "About Me",
    url: "/about",
    iconUrl: "/resources/icons/face.svg",
  },
  {
    id: "resume",
    title: "Resume",
    url: "/resume",
    iconUrl: "/resources/icons/cog.svg",
  },
];

const meta = {
  title: "Components/Side Navigation",
  component: SideNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: "/about",
      },
    }),
  },
  args: {
    links: {
      links: dataLinks,
    },
    avatar: {
      imageSrc: "../../../../public/resources/images/avatar.webp",
      imageAlt: "Eliran Teller (Image)",
      name: `Eliran Teller`,
      subtitle: "Software Developer",
    },
  },
};
