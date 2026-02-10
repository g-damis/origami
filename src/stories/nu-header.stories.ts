import type { Meta, StoryFn } from '@storybook/web-components';
import '../atom-components/nu-header.ts';

interface NuHeaderProps {
  loggedIn: boolean;
}

export default {
  title: 'Atoms/NuHeader',
  component: 'nu-header',
  argTypes: {
    loggedIn: { control: 'boolean' }
  }
} satisfies Meta<NuHeaderProps>;

const Template: StoryFn<NuHeaderProps> = (args) => {
  const el = document.createElement('nu-header') as any;
  Object.assign(el, args);

  el.addEventListener('login', () => console.log('Login triggered'));
  el.addEventListener('logout', () => console.log('Logout triggered'));

  return el;
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { loggedIn: false };

export const LoggedIn = Template.bind({});
LoggedIn.args = { loggedIn: true };
