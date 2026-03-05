import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@atom_components/nu-collapse';

const meta: Meta = {
  title: 'Atoms/NuCollapse',
  component: 'nu-collapse',
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    'nu-toggle': { action: 'toggled' }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false
  },
  render: ({ open }) => html`
    <nu-collapse ?open=${open}>
      <div
        style="
          padding: var(--nu-spacing-4);
          border: 1px solid var(--nu-color-accent);
          border-radius: var(--nu-radius-md);
          background: var(--nu-color-gray-50);">
        <p style="margin: 0;">Contenuto collassabile controllato dalla prop open.</p>
      </div>
    </nu-collapse>
  `
};

export const ExternalControl: Story = {
  args: {
    open: true
  },
  render: ({ open }) => html`
    <div style="display: grid; gap: var(--nu-spacing-3);">
      <button
        type="button"
        style="
          width: fit-content;
          padding: var(--nu-spacing-2) var(--nu-spacing-4);
          cursor: pointer;"
        @click=${(event: Event) => {
          const container = (event.currentTarget as HTMLElement).parentElement;
          const collapse = container?.querySelector('nu-collapse') as { toggle: () => void } | null;
          collapse?.toggle();
        }}>
        Toggle esterno
      </button>
      <nu-collapse ?open=${open}>
        <div
          style="
            padding: var(--nu-spacing-4);
            border: 1px solid var(--nu-color-accent);
            border-radius: var(--nu-radius-md);
            background: var(--nu-color-gray-50);">
          <p style="margin: 0;">Questo blocco viene aperto/chiuso da un controllo esterno.</p>
        </div>
      </nu-collapse>
    </div>
  `
};
