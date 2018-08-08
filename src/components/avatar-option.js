/* @flow */
import React from 'react';
import styled from 'styled-components';

import Avatar from './avatar';

export type Props = {
    name: string,
    email: string,
};

const AvatarOption = (props: Props) => {
    const { name, email } = props;
    return (
        <AvatarContainer>
            <Avatar email={email} name={name} />
            <span>{name}</span>
        </AvatarContainer>
    );
};

const AvatarContainer = styled.div`
    display: inline-block;
`;

export default AvatarOption;
