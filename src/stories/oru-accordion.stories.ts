import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { OruAccordionItem } from '@molecule_components/oru-accordion';
import '@molecule_components/oru-accordion';

const defaultItems: OruAccordionItem[] = [
  {
    title: 'Sezione 1',
    content: 'Contenuto della prima sezione',
    expanded: true
  },
  {
    title: 'Sezione 2',
    content: 'Contenuto della seconda sezione'
  },
  {
    title: 'Sezione 3',
    content: 'Contenuto della terza sezione'
  }
];

const meta: Meta = {
  title: 'Molecules/OruAccordion',
  component: 'oru-accordion',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    multiple: { control: 'boolean' },
    title: { control: 'text' },
    expanded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    typographyProps: { control: 'object' },
    otherProps: { control: 'object' },
    'oru-change': { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    items: [],
    multiple: false,
    title: 'Change this content to see how it gets overwritten',
    expanded: false,
    disabled: false,
    typographyProps: { variant: 'h2' },
    otherProps: { 'data-testid': 'oru-accordion-default' }
  },
  render: ({ items, multiple, title, expanded, disabled, typographyProps, otherProps }) => html`
    <oru-accordion
      .items=${items}
      ?multiple=${multiple}
      title=${title}
      ?expanded=${expanded}
      ?disabled=${disabled}
      .typographyProps=${typographyProps}
      .otherProps=${otherProps}
      .onChange=${(_event: Event, isExpanded: boolean) => console.log('Expanded:', isExpanded)}>
      <p style="margin: 0;">Contenuto passato come children (slot di default).</p>
    </oru-accordion>
  `
};

export const CustomIcon: Story = {
  args: {
    items: [],
    multiple: false,
    title: 'Accordion con icona custom',
    expanded: true,
    disabled: false,
    typographyProps: { variant: 'h3' },
    otherProps: {}
  },
  render: ({ items, multiple, title, expanded, disabled, typographyProps, otherProps }) => html`
    <oru-accordion
      .items=${items}
      ?multiple=${multiple}
      title=${title}
      ?expanded=${expanded}
      ?disabled=${disabled}
      .typographyProps=${typographyProps}
      .otherProps=${otherProps}
      .expandIcon=${html`<span>+</span>`}>
      <p style="margin: 0;">Esempio con expandIcon custom e pannello aperto.</p>
    </oru-accordion>
  `
};

export const GroupSingleOpen: Story = {
  args: {
    items: defaultItems,
    multiple: false
  },
  render: ({ items, multiple }) => html`
    <oru-accordion
      .items=${items}
      ?multiple=${multiple}
      .onChange=${(_event: Event, isExpanded: boolean) => console.log('Expanded:', isExpanded)}>
    </oru-accordion>
  `
};

export const GroupMultiOpen: Story = {
  args: {
    items: defaultItems,
    multiple: true
  },
  render: ({ items, multiple }) => html`
    <oru-accordion
      .items=${items}
      ?multiple=${multiple}
      .onChange=${(_event: Event, isExpanded: boolean) => console.log('Expanded:', isExpanded)}>
    </oru-accordion>
  `
};

export const GroupWithPerItemSlotIcons: Story = {
  args: {
    items: defaultItems,
    multiple: true
  },
  render: ({ items, multiple }) => html`
    <oru-accordion .items=${items} ?multiple=${multiple}>
      <span slot="icon-0">+</span>
      <span slot="icon-1">?</span>
      <svg
        slot="icon-2"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true">
        <path d="M12 2l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z"></path>
      </svg>
    </oru-accordion>
  `
};
