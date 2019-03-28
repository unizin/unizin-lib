/* @flow */
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import theme from '../theme';

export type Props = { message?: string };

class Loading extends Component<Props> {
    render() {
        const { message } = this.props;
        return (
            <Wrapper>
                {message ? message : 'Loading'}
                ...
            </Wrapper>
        );
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
    align-items: center;
    animation: ${fadeInOut} 1.5s infinite;
    display: flex;
    font-size: ${theme.fonts.sizes.small};
    height: 100%;
    justify-content: center;
    letter-spacing: 1px;
    padding: ${theme.spacing.medium};
    text-transform: uppercase;
`;

export default Loading;
