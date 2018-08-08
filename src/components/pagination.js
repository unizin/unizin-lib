/* @flow */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faAngleLeft from '@fortawesome/fontawesome-free-solid/faAngleLeft';
import faAngleRight from '@fortawesome/fontawesome-free-solid/faAngleRight';

import Aural from './aural';
import theme from '../theme';

export type Props = {
    page: number,
    pageCount: number,
    hasNext: boolean,
    changePage: Function,
};

class Pagination extends React.Component<Props> {
    handleClickNext = () => {
        this.props.changePage(this.props.page + 1);
    };
    handleClickPrevious = () => {
        this.props.changePage(this.props.page - 1);
    };
    render = () => {
        const { page, hasNext, pageCount } = this.props;
        if (page === 1 && !hasNext) return null;
        return (
            <PaginationWrapper>
                <div>
                    <Button onClick={this.handleClickPrevious} disabled={page === 1}>
                        <FontAwesomeIcon aria-hidden icon={faAngleLeft} />
                        <Aural>Previous page</Aural>
                    </Button>
                </div>
                <div>
                    Page {page} of {pageCount}
                </div>
                <div>
                    <Button onClick={this.handleClickNext} disabled={!hasNext}>
                        <FontAwesomeIcon aria-hidden icon={faAngleRight} />
                        <Aural>Next page</Aural>
                    </Button>
                </div>
            </PaginationWrapper>
        );
    };
}

const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;

    > div {
        padding: 0.75rem;
    }

    &:last-child {
        margin-bottom: ${theme.spacing.large};
    }

    > :nth-child(2) {
        min-width: 70px;
        text-align: center;
    }

    > :not(:nth-child(2)) {
        button {
            font-size: 21px;
        }
    }
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    background: #fff;
    border: ${theme.borders.default};
`;

export default Pagination;