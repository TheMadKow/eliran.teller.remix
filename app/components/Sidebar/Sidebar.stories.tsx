import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-react-router-v6';

import SideNavigation from './Sidebar';
import { mockSideNavigation } from './_mock/mockData';

const meta = {
  title: 'Components/Side Bar',
  component: SideNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof SideNavigation>;

export const Default: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/about',
      },
    }),
  },
  args: {
    ...mockSideNavigation,
  },
};
