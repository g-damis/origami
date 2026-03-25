import type { Meta, StoryFn } from '@storybook/web-components';
import '../atom-components/oru-header.ts';

interface OruHeaderProps {
  loggedIn: boolean;
}

export default {
  title: 'Atoms/OruHeader',
  component: 'oru-header',
  argTypes: {
    loggedIn: { control: 'boolean' }
  }
} satisfies Meta<OruHeaderProps>;

const Template: StoryFn<OruHeaderProps> = (args) => {
  const el = document.createElement('oru-header') as any;
  Object.assign(el, args);

  el.addEventListener('login', () => console.log('Login triggered'));
  el.addEventListener('logout', () => console.log('Logout triggered'));

  return el;
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { loggedIn: false };

export const LoggedIn = Template.bind({});
LoggedIn.args = { loggedIn: true };
