import type { Meta, StoryFn } from '@storybook/web-components';
import '@atom_components/oru-footer';

interface OruFooterProps {
  text: string;
}

export default {
  title: 'Atoms/OruFooter',
  component: 'oru-footer',
  argTypes: {
    text: { control: 'text' }
  }
} satisfies Meta<OruFooterProps>;

const Template: StoryFn<OruFooterProps> = (args) => {
  const el = document.createElement('oru-footer') as any;
  Object.assign(el, args);
  return el;
};

export const Default = Template.bind({});
Default.args = {
  text: '© 2026 Digiservice Solutions'
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Tutti i diritti riservati'
};
