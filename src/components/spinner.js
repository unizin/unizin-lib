/* @flow */
import React from 'react';
import Color from 'color-js';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

type Props = {
    width?: 'string',
    color?: 'string',
};

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export default function Spinner({ width = '4rem', color = theme.colors.yellow.medium }: Props) {
    const Gradient = styled.div`
        &:after {
            position: absolute;
            content: '';
            background-image: linear-gradient(
                to right,
                ${Color(color)
                        .lightenByRatio(0.5)
                        .toString()}
                    20%,
                ${Color(color).toString()}
            );
            height: calc(${width} / 2);
            width: ${width};
            border-radius: ${width} ${width} 0 0;
            left: 0;
        }

        &:before {
            position: absolute;
            content: '';
            background-image: linear-gradient(
                to left,
                transparent 0,
                ${Color(color)
                        .lightenByRatio(0.5)
                        .toString()}
                    80%
            );
            height: calc(${width} / 2);
            width: ${width};
            border-radius: 0 0 ${width} ${width};
            top: 50%;
            left: 0;
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
        position: absolute;
        width: calc(${width} * (2 / 3));
        height: calc(${width} * (2 / 3));
        top: calc(50% - (${width} * (2 / 3)) / 2);
        left: calc((${width} * (2 / 3)) / 4);
    `;

    return (
        <Container>
            <Gradient />
            <Mask />
        </Container>
    );
}
