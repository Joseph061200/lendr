import React from 'react';
import { ProfileCard } from '../comps/ProfileCard';

export default {
    title: 'Profile Card/Alex Comps',
    component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    ...HeaderStories.LoggedOut.args,
};
