/* @flow */
import React from 'react';

import Avatar from './avatar';

export type Props = {
    name: string,
    email: string,
};

const AvatarOption = (props: Props) => {
    const { name, email } = props;
    return (
        <div>
            <Avatar email={email} name={name} />
            <span>{name}</span>
        </div>
    );
};

export default AvatarOption;
