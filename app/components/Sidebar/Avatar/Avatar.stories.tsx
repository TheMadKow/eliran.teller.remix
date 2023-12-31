import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';
import { mockSideNavigation } from '../_mock/mockData';

const meta = {
  title: 'Components/Side Bar/Sections/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    ...mockSideNavigation.avatar,
  },
};
