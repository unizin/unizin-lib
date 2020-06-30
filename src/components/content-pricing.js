/* @flow */
import React, { type Node } from 'react';
import styled from 'styled-components';

import Aural from './aural';
import theme from '../theme';

export type Props = {
    listPrice?: string,
    offerPrice?: string,
    isExempt?: Boolean,
    isWaived?: boolean,
    children?: Node,
};

export default function Pricing({
    listPrice: listPriceString,
    offerPrice: offerPriceString,
    isExempt,
    isWaived,
    children,
}: Props) {
    if (!offerPriceString) {
        return (
            <div>
                <div aria-hidden>N/A</div>
                <div className="aural">Pricing not available</div>
            </div>
        );
    }

    const listPrice = parseFloat(listPriceString);
    const offerPrice = parseFloat(offerPriceString.replace(/^\$/, ''));
    const nonNumerical = Number.isNaN(offerPrice);
    if (listPrice === 0 && offerPrice === 0) {
        return <Free>Free</Free>;
    }

    const savingsPercent = nonNumerical
        ? 100
        : Math.round(((listPrice - offerPrice) / listPrice) * 100);

    return (
        <Wrapper>
            <div>
                <Price strikeThrough={isWaived && !nonNumerical}>
                    <Aural>Your price</Aural>{' '}
                    <Cost>
                        {nonNumerical
                            ? offerPriceString
                            : offerPrice
                            ? `$${offerPrice.toFixed(2)}`
                            : 'Free'}
                    </Cost>
                </Price>
                <Percent>
                    <>
                        {!Number.isNaN(listPrice) ? (
                            <>
                                <StrikeThrough>${listPrice.toFixed(2)}</StrikeThrough>
                                <span>{savingsPercent}% savings</span>
                            </>
                        ) : null}
                        {children}
                    </>
                </Percent>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    justify-content: flex-end;
    display: flex;
    width: 100%;
`;

const Price = styled.div`
    text-align: right;
    ${({ strikeThrough }) => (strikeThrough ? 'text-decoration: line-through;' : '')}

    span {
        display: block;
        margin-bottom: 0;
        text-transform: uppercase;

        &:first-child {
            font-size: 11px;
        }
    }
`;

const Free = styled.div`
    background: ${theme.colors.green.ultraLight};
    border: 1px solid ${theme.colors.green.medium};
    padding: 0 ${theme.spacing.small};
    border-radius: 2px;
    font-size: ${theme.fonts.sizes.discrete};
    font-weight: 400;
`;

const Cost = styled.span`
    font-size: ${theme.fonts.sizes.plus1};
    font-weight: bold;
`;

const StrikeThrough = styled.span`
    text-decoration: line-through;
    margin-right: ${theme.spacing.tiny};
`;

const Percent = styled.div`
    align-items: center;
    color: ${theme.colors.grey.medium};
    display: flex;
    font-size: ${theme.fonts.sizes.tiny};
    justify-content: flex-end;
    text-align: right;
    white-space: nowrap;
`;
