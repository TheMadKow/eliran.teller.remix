import type { Meta, StoryObj } from '@storybook/react';

import Menu from '../components/Menu/Menu'

const meta = {
    title: "Components/Menu",
    component: Menu,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>

export const Default: Story = {
    args: {
        activeId: 'about',
        items: [{id: 'about', title: 'About', url: '/about'}]
    }
}