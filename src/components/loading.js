/* @flow */
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import theme from '../theme';

export type Props = { message?: string };

class Loading extends Component<Props> {
    render() {
        const { message } = this.props;
        return <Wrapper>{message ? message : 'Loading'}...</Wrapper>;
    }
}

const fadeInOut = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: .1;
    }
`;
const Wrapper = styled.div`
    animation: ${fadeInOut} 1.5s infinite;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: ${theme.fonts.sizes.small};
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.medium};
`;

export default Loading;
