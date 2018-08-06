/* @flow */
import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

export type Props = {
    page: number,
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
        const { page, hasNext } = this.props;
        if (page === 1 && !hasNext) return null;
        return (
            <PaginationWrapper className="columns">
                <div className="column is-narrow">
                    <Button onClick={this.handleClickPrevious} disabled={page === 1}>
                        <i className="fa fa-angle-left" aria-hidden />
                        <span className="aural">Previous page</span>
                    </Button>
                </div>
                <div className="column is-narrow">Page {page}</div>
                <div className="column is-narrow">
                    <Button onClick={this.handleClickNext} disabled={!hasNext}>
                        <i className="fa fa-angle-right" aria-hidden />
                        <span className="aural">Next page</span>
                    </Button>
                </div>
            </PaginationWrapper>
        );
    };
}

const PaginationWrapper = styled.div`
    align-items: center;

    &:last-child {
        margin-bottom: ${theme.spacing.large};
    }

    .column:nth-child(2) {
        min-width: 70px;
        text-align: center;
    }
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    background: #fff;
    border: ${theme.borders.default};
`;

export default Pagination;
