/* @flow */
import React, { type Node } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import classnames from 'classnames';

const ToggleHandle = ({
    expanded,
    onClick,
}: {
    expanded: boolean,
    onClick?: (SyntheticEvent<*>) => void,
}): Node => <Triangle className={classnames({ expanded: expanded })} onClick={onClick} />;

const Triangle = styled.div`
    border-right: ${theme.spacing.tiny} solid ${theme.colors.grey.dark};
    border-top: ${theme.spacing.tiny} solid transparent;
    border-bottom: ${theme.spacing.tiny} solid transparent;
    cursor: pointer;
    margin: 0 ${theme.spacing.tiny} 0 ${theme.spacing.small};

    &:not(.expanded) {
        transition: transform ${theme.animationDuration};
    }

    &.expanded {
        transition: transform ${theme.animationDuration};
        transform: rotate(-90deg);
    }
`;

export default ToggleHandle;
