/* @flow */
import React from 'react';
import Color from 'color-js';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

type Props = {
    color?: string,
    stroke?: string,
    width?: string,
};

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export default function Spinner({
    width = '4rem',
    stroke = '10px',
    color = theme.colors.grey.ultraDark,
}: Props) {
    const Gradient = styled.div`
        &:after {
            background-image: linear-gradient(
                to right,
                ${Color(color)
                        .lightenByRatio(0.5)
                        .toString()}
                    20%,
                ${Color(color).toString()}
            );
            border-radius: ${width} ${width} 0 0;
            content: '';
            height: 50%;
            left: 0;
            position: absolute;
            width: 100%;
        }

        &:before {
            background-image: linear-gradient(
                to left,
                transparent 0,
                ${Color(color)
                        .lightenByRatio(0.5)
                        .toString()}
                    80%
            );
            border-radius: 0 0 ${width} ${width};
            content: '';
            height: 50%;
            left: 0;
            position: absolute;
            top: 50%;
            width: 100%;
        }
    `;

    const Container = styled.div`
        animation: ${rotation} 2s linear infinite;
        position: relative;
        height: ${width};
        width: ${width};
    `;

    const Mask = styled.div`
        background: white;
        border-radius: 50%;
        height: calc(${width} - (2 * ${stroke}));
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(${width} - (2 * ${stroke}));
    `;

    return (
        <Container>
            <Gradient />
            <Mask />
        </Container>
    );
}
