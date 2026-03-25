import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@atom_components/oru-collapse';

const meta: Meta = {
  title: 'Atoms/OruCollapse',
  component: 'oru-collapse',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    'oru-toggle': { action: 'toggled' }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false
  },
  render: ({ open }) => html`
    <oru-collapse ?open=${open}>
      <div
        style="
          padding: var(--oru-spacing-4);
          border: 1px solid var(--oru-color-accent);
          border-radius: var(--oru-radius-md);
          background: var(--oru-color-gray-50);">
        <p style="margin: 0;">Contenuto collassabile controllato dalla prop open.</p>
      </div>
    </oru-collapse>
  `
};

export const ExternalControl: Story = {
  args: {
    open: true
  },
  render: ({ open }) => html`
    <div style="display: grid; gap: var(--oru-spacing-3);">
      <button
        type="button"
        style="
          width: fit-content;
          padding: var(--oru-spacing-2) var(--oru-spacing-4);
          cursor: pointer;"
        @click=${(event: Event) => {
          const container = (event.currentTarget as HTMLElement).parentElement;
          const collapse = container?.querySelector('oru-collapse') as { toggle: () => void } | null;
          collapse?.toggle();
        }}>
        Toggle esterno
      </button>
      <oru-collapse ?open=${open}>
        <div
          style="
            padding: var(--oru-spacing-4);
            border: 1px solid var(--oru-color-accent);
            border-radius: var(--oru-radius-md);
            background: var(--oru-color-gray-50);">
          <p style="margin: 0;">Questo blocco viene aperto/chiuso da un controllo esterno.</p>
        </div>
      </oru-collapse>
    </div>
  `
};
