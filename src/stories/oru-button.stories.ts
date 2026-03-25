import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@atom_components/oru-button';

const meta: Meta = {
  title: 'Atoms/OruButton',
  component: 'oru-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    'oru-click': { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false
  },
  render: ({ variant, disabled }) => html`
    <oru-button variant=${variant} ?disabled=${disabled}>Button</oru-button>
  `
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false
  },
  render: ({ variant, disabled }) => html`
    <oru-button variant=${variant} ?disabled=${disabled}>Button</oru-button>
  `
};
