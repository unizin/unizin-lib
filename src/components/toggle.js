/* @flow */
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

type Props = {
    checked?: boolean,
    color?: string,
    disabled?: boolean,
    height?: string | number,
    onChange?: boolean => void,
};

export default function Toggle({
    checked = false,
    color = theme.colors.green.medium,
    disabled = false,
    height = theme.spacing.small,
    onChange,
    ...rest
}: Props) {
    const [isChecked, setChecked] = useState(checked || false);
    const onClick = () => {
        if (disabled) return;
        setChecked(!isChecked);
        onChange && onChange(!isChecked);
    };
    const onKeyDown = ({ key }: SyntheticKeyboardEvent<HTMLDivElement>) => {
        if (key === 'Enter' || key === ' ') {
            onClick();
        }
    };
    return (
        <Wrapper
            aria-checked={isChecked}
            checked={isChecked}
            color={color}
            disabled={disabled}
            height={height}
            onClick={onClick}
            onKeyDown={onKeyDown}
            role="checkbox"
            {...(disabled ? null : { tabIndex: 0 })}
            {...rest}
        />
    );
}

const Wrapper = styled.div`
    ${({ checked, color, disabled, height }) => `
        border: ${theme.borders.default};
        background: ${
            disabled ? theme.colors.grey.ultraLight : checked ? color : theme.colors.grey.light
        };
        width: calc(2 * ${height});
        height: ${height};
        border-radius: ${height};
        position: relative;

        &:after {
            transition: transform ${theme.animationDuration};
            background: white;
            border-radius: ${height};
            border: ${theme.borders.default};
            content: '';
            height: ${height};
            width: ${height};
            position: absolute;
            top: -1px;
            right: -1px;
            transform: translateX(${checked ? 0 : 'calc(-100% + 2px)'});
        }
    `}
`;
