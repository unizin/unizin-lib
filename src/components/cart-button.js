/* @flow */
import React, { type Node, PureComponent, Fragment } from 'react';
import styled from 'styled-components';
import OverlayModal from '../overlay-modal';
import ModalHeader from '../modal-header';
import ModalBody from '../modal-body';

import CountIcon from '../count-icon';
import theme from '../../theme';

export type Props = {
    requestItems: Array<EditContentRequestWrapper>,
    catalogItems: Array<ContentPriceWrapper>,
    children: Node,
};

export default class CartButton extends PureComponent<Props, { open: boolean }> {
    render() {
        const { requestItems, catalogItems, children } = this.props;
        const itemCount = requestItems.length + catalogItems.length;
        return (
            <CartWrapper>
                <OverlayModal
                    buttonClasses="cart-button"
                    isFullHeight={true}
                    titleText="Review Order"
                    trigger={
                        <Fragment>
                            <i className="fa fa-shopping-cart" aria-hidden />
                            {itemCount > 0 ? (
                                <CountIcon count={itemCount} isSmall isDanger />
                            ) : null}
                            <span className="aural">{`Order cart: ${itemCount} items`}</span>
                        </Fragment>
                    }
                >
                    <ModalHeader title="Review Order" />
                    <ModalBody>{children}</ModalBody>
                </OverlayModal>
            </CartWrapper>
        );
    }
}

const CartWrapper = styled.div`
    .cart-button {
        align-items: center;
        background-color: unset;
        border: none;
        display: flex;
        height: ${theme.orderHeaderHeight};
        justify-content: center;
        position: relative;
        width: ${theme.orderHeaderHeight};

        .tag.is-small {
            min-width: ${theme.fontSizes.normal};
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(calc(-50% + 7px), calc(-50% - 7px));
        }

        .fa {
            font-size: 1.2rem;
        }

        @media (min-width: ${theme.breakpoints.mobile}) {
            display: none;
        }
    }
`;
