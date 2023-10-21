import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import Links from './Links';
import { mockSideNavigation } from '../_mock/mockData';

const meta = {
  title: 'Components/Side Bar/Sections/Links',
  component: Links,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof Links>;

export const Default: Story = {
  args: {
    ...mockSideNavigation.links,
  },
};

export const About: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/about',
      },
    }),
  },
  args: {
    ...mockSideNavigation.links,
  },
};

export const Resume: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/resume',
      },
    }),
  },
  args: {
    ...mockSideNavigation.links,
  },
};
