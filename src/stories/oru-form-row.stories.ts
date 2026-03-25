import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@molecule_components/oru-form-row';

const meta: Meta = {
  title: 'Molecules/OruFormRow',
  component: 'oru-form-row',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    'oru-submit': { action: 'submitted' }
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
    <oru-form-row
      label=${label}
      buttonText=${buttonText}
      @oru-submit=${(e: CustomEvent) => console.log('Submitted value:', e.detail)}>
    </oru-form-row>
  `
};
