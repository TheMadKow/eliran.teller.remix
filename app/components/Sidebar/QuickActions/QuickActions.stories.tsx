import type { Meta, StoryObj } from '@storybook/react';

import QuickActions from './QuickActions';
import { mockSideNavigation } from '../_mock/mockData';

const meta = {
  title: 'Components/Side Bar/Sections/QuickActions',
  component: QuickActions,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof QuickActions>;

export default meta;
type Story = StoryObj<typeof QuickActions>;

export const Default: Story = {
  args: {
    ...mockSideNavigation.quickActions,
  },
};
