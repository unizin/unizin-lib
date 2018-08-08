/* @flow */
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

import Aural from './aural';

type Props = {
    triggerBoolean: boolean,
    isSmall: boolean,
    handleOnClick?: (SyntheticEvent<>) => void,
    title: string,
};

const ButtonAddRemove = (props: Props) => {
    const { triggerBoolean, handleOnClick, isSmall, title } = props;
    const buttonClasses = classNames(
        { 'is-small': isSmall },
        { 'is-danger': triggerBoolean },
        { 'is-primary': !triggerBoolean }
    );
    return (
        <Button className={buttonClasses} onClick={handleOnClick}>
            <span className="cross" />
            <Aural>
                {triggerBoolean ? 'Remove' : 'Add'} {title}
            </Aural>
        </Button>
    );
};

const buttonSize = 22;
const smallButtonSize = 18;
const Button = styled.button`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    background: #0365a8;
    border-radius: 50%;
    border: none;
    position: relative;
    transition: all 0.25s;
    cursor: pointer;

    &.is-small {
        width: ${smallButtonSize}px;
        height: ${smallButtonSize}px;

        &:before,
        &:after {
            height: ${smallButtonSize / 6}px;
        }
    }

    &.is-danger {
        background: #df204a;
        transform: rotate(45deg);
    }

    .cross {
        display: inline-block;

        &:before,
        &:after {
            content: ' ';
            width: 50%;
            height: ${buttonSize / 6}px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: block;
        }

        &:after {
            transform: translate(-50%, -50%) rotate(90deg);
        }
    }
`;

export default ButtonAddRemove;
