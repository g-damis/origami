import type { Meta, StoryFn } from '@storybook/web-components';
import '../atom-components/my-header.ts';

interface MyHeaderProps {
  loggedIn: boolean;
}

export default {
  title: 'Atom/MyHeader',
  component: 'my-header',
  argTypes: {
    loggedIn: { control: 'boolean' }
  }
} satisfies Meta<MyHeaderProps>;

const Template: StoryFn<MyHeaderProps> = (args) => {
  const el = document.createElement('my-header') as any;
  Object.assign(el, args);

  el.addEventListener('login', () => console.log('Login triggered'));
  el.addEventListener('logout', () => console.log('Logout triggered'));

  return el;
};

export const LoggedOut = Template.bind({});
LoggedOut.args = { loggedIn: false };

export const LoggedIn = Template.bind({});
LoggedIn.args = { loggedIn: true };
