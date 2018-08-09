/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { AvatarOption } from '../dist/esm';

const elvisPresley = {
    name: 'Elvis Presley',
    email: 'elvis@example.com',
};

storiesOf('AvatarOption', module).add('Elvis', () => <AvatarOption {...elvisPresley} />);
