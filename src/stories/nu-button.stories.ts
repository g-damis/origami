import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@atom_components/nu-button';

const meta: Meta = {
  title: 'Atoms/NuButton',
  component: 'nu-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    'nu-click': { action: 'clicked' }
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
    <nu-button variant=${variant} ?disabled=${disabled}>Button</nu-button>
  `
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    disabled: false
  },
  render: ({ variant, disabled }) => html`
    <nu-button variant=${variant} ?disabled=${disabled}>Button</nu-button>
  `
};
