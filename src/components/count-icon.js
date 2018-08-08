/* @flow */
import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

export type Props = {
    count: string | number,
    isDanger?: boolean,
    isSmall?: boolean,
};

const CountIcon = (props: Props) => {
    const { count, isDanger = false, isSmall = true } = props;
    let iconClasses = 'tag is-round';
    iconClasses += isDanger ? ' is-danger' : '';
    iconClasses += isSmall ? ' is-small' : '';
    return <Count className={iconClasses}>{count}</Count>;
};

const Count = styled.span`
    &.tag {
        background-color: ${theme.colors.grey.dark};
        color: #fff;

        &.is-danger {
            background-color: ${theme.colors.red.default};
        }

        &.is-round {
            align-items: center;
            border-radius: 50%;
            display: inline-flex;
            font-family: Arial;
            font-size: 0.9rem;
            font-weight: bold;
            height: 21px;
            justify-content: center;
            letter-spacing: -0.5px;
            padding: 0;
            width: 21px;
        }

        &.is-small {
            font-size: 0.8rem;
            height: 14px;
            width: 14px;
        }
    }
`;

export default CountIcon;
