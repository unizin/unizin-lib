/* @flow */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import theme from '../theme';

const RATooltip = require('react-aria-tooltip').default; // This is wonky but we have to do it

export default function Tooltip({ message }: { message: string }) {
    return (
        <ToolTipContainer>
            <RATooltip eventType="hover" message={message} direction="bottom">
                <FontAwesomeIcon icon={faQuestionCircle} tabIndex={0} />
            </RATooltip>
        </ToolTipContainer>
    );
}

const ToolTipContainer = styled.div`
    display: inline;

    .ra-tooltip {
        background-color: white;
        box-shadow: ${theme.shadows.default};
        z-index: 1;
        padding: ${theme.spacing.small} 0;

        &.bottom {
            transform: translate(-50%, 105%);
        }
    }

    .ra-tooltip-message {
        width: 320px;

        @media (max-width: ${theme.breakpoints.mobile}) {
            width: 240px;
        }

        > p {
            color: ${theme.colors.grey.default};
            white-space: normal;
            font-size: ${theme.fonts.sizes.discrete};
            line-height: ${theme.fonts.sizes.plus1};
        }

        :after {
            display: none;
        }
    }
`;
