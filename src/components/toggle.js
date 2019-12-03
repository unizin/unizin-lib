/* @flow */
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

type Props = {
    checked?: boolean,
    disabled?: boolean,
    onChange?: (SyntheticEvent<HTMLInputElement>) => void,
};

export default function Toggle({ checked, disabled, onChange }: Props) {
    const [isChecked, setChecked] = useState(checked || false);
    const onClick = e => {
        if (disabled) return;
        setChecked(!isChecked);
        onChange && onChange(e);
    };
    return (
        <Wrapper checked={isChecked} onClick={onClick} disabled={disabled}>
            <input type="checkbox" checked={isChecked} disabled={disabled} onChange={onClick} />
            <div aria-hidden />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border: ${theme.borders.default};
    background: ${({ checked, disabled }) =>
        disabled
            ? theme.colors.grey.ultraLight
            : checked
            ? theme.colors.green.medium
            : theme.colors.grey.light};
    width: ${theme.spacing.medium};
    height: ${theme.spacing.small};
    border-radius: ${theme.spacing.small};
    position: relative;

    > input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        opacity: 0;
    }

    > div {
        transition: transform ${theme.animationDuration};
        background: white;
        border-radius: ${theme.spacing.small};
        border: ${theme.borders.default};
        height: ${theme.spacing.small};
        width: ${theme.spacing.small};
        position: absolute;
        top: -1px;
        right: -1px;
        transform: translateX(${({ checked }) => (checked ? 0 : 'calc(-100% + 2px)')});
    }
`;
