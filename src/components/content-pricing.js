/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../theme';

export type Props = {
    listPrice?: string,
    offerPrice?: string,
};

class Pricing extends Component<Props> {
    renderOfferPrice = () => {
        const { listPrice: listPriceString, offerPrice: offerPriceString } = this.props;

        if (!offerPriceString) {
            return (
                <div>
                    <div aria-hidden>N/A</div>
                    <div className="aural">Pricing not available</div>
                </div>
            );
        }

        const listPrice = parseFloat(listPriceString);
        const offerPrice = parseFloat(offerPriceString);
        if (listPrice === 0 && offerPrice === 0) {
            return <Free>Free</Free>;
        }

        const savingsPercent = Math.round((listPrice - offerPrice) / listPrice * 100);

        return (
            <div>
                <Price>
                    <span className="heading aural">Your price</span>{' '}
                    <Cost>{offerPrice ? `$${offerPrice.toFixed(2)}` : 'Free'}</Cost>
                </Price>
                {listPrice ? (
                    <Percent>
                        <StrikeThrough>${listPrice.toFixed(2)}</StrikeThrough> ({savingsPercent}%
                        savings)
                    </Percent>
                ) : null}
            </div>
        );
    };
    render() {
        return <Wrapper>{this.renderOfferPrice()}</Wrapper>;
    }
}

const Wrapper = styled.div`
    justify-content: flex-end;
    display: flex;
    width: 100%;
`;

const Price = styled.div`
    text-align: right;

    .heading {
        margin-bottom: 0;
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

const StrikeThrough = styled.span`text-decoration: line-through;`;

const Percent = styled.div`
    font-size: ${theme.fonts.sizes.discrete};
    padding-left: ${theme.spacing.small};
    text-align: right;
    color: ${theme.colors.grey.medium};
`;

export default Pricing;
