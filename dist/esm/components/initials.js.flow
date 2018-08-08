/* @flow */
import React from 'react';
import styled from 'styled-components';

import theme from '../theme.js';

export type Props = { name: string };

export default function Initials(props: Props) {
    const { name } = props;
    let initials = name
        .split(' ')
        .map(s => s[0])
        .join('');

    if (initials.length > 2) {
        initials = `${initials[0]}${initials[initials.length - 1]}`;
    }

    return <Wrapper aria-hidden>{initials}</Wrapper>;
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: ${theme.avatarSizes.small};
    height: ${theme.avatarSizes.small};
    background: ${theme.colors.grey.ultraLight};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.sizes.tiny};
    color: ${theme.colors.grey.dark};
    font-weight: bold;
    letter-spacing: 0.5px;
`;
