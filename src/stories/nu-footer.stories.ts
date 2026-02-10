import type { Meta, StoryFn } from '@storybook/web-components';
import '../atom-components/nu-footer.ts';

interface NuFooterProps {
  text: string;
}

export default {
  title: 'Atoms/NuFooter',
  component: 'nu-footer',
  argTypes: {
    text: { control: 'text' }
  }
} satisfies Meta<NuFooterProps>;

const Template: StoryFn<NuFooterProps> = (args) => {
  const el = document.createElement('nu-footer') as any;
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
