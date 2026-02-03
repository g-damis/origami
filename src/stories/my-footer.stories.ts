import type { Meta, StoryFn } from '@storybook/web-components';
import '../atom-components/my-footer.ts';

interface MyFooterProps {
  text: string;
}

export default {
  title: 'Atom/MyFooter',
  component: 'my-footer',
  argTypes: {
    text: { control: 'text' }
  }
} satisfies Meta<MyFooterProps>;

const Template: StoryFn<MyFooterProps> = (args) => {
  const el = document.createElement('my-footer') as any;
  Object.assign(el, args);
  return el;
};

export const Default = Template.bind({});
Default.args = {
  text: '© 2026 My Company'
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: 'Tutti i diritti riservati'
};
