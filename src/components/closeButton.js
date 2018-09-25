/* @flow */
import styled from 'styled-components';
import theme from '../theme';

export default styled.button`
    position: relative;
    border-radius: 50%;
    border-color: transparent;
    width: ${theme.fontSizes.plus5};
    height: ${theme.fontSizes.plus5};
    background: ${theme.colors.grey.default};
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover {
        background: ${theme.colors.grey.dark};
        transform: scale(1.1);
    }

    &:before,
    &:after {
        content: '';
        width: 13px;
        height: 2px;
        background: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;
