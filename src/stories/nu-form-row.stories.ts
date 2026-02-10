import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@molecule_components/nu-form-row';

const meta: Meta = {
  title: 'Molecules/NuFormRow',
  component: 'nu-form-row',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    'nu-submit': { action: 'submitted' }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Your name',
    buttonText: 'Send'
  },
  render: ({ label, buttonText }) => html`
    <nu-form-row
      label=${label}
      buttonText=${buttonText}
      @nu-submit=${(e: CustomEvent) => console.log('Submitted value:', e.detail)}>
    </nu-form-row>
  `
};
