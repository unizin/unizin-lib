/* @flow */
import React from 'react';
import md5 from 'crypto-js/md5';
import styled from 'styled-components';

import theme from '../theme';
import Initials from './initials';

export type Props = {
    email: string,
    name: string,
};

export default function Avatar(props: Props) {
    const { name } = props;
    // You HAVE to lower case email addresses for them to work with gravatar. I
    // have contacted too many websites about broken implementations for us to
    // make the same mistake
    const email = props.email.toLowerCase();
    const hash = md5(email);

    const src = `https://www.gravatar.com/avatar/${hash}?d=blank`;
    const altValue = `Gravatar image for ${email}`;
    return (
        <AvatarWrapper>
            <Image src={src} className="avatar" alt={altValue} />
            <Initials name={name} />
        </AvatarWrapper>
    );
}

const AvatarWrapper = styled.div`
    position: relative;
    width: ${theme.avatarSizes.small};
    height: ${theme.avatarSizes.small};
    border-radius: 50%;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: ${theme.avatarSizes.small};
    height: ${theme.avatarSizes.small};
    border-radius: 50%;
    z-index: 1;
`;
