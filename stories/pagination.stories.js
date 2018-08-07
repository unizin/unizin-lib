/* @flow */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from '../src/components/pagination';

const changePage = action('change page');

storiesOf('Pagination', module)
    .add('On Page 1', () => {
        return <Pagination hasNext={true} page={1} changePage={changePage} />;
    })
    .add('hasNext, on Page 2', () => {
        return <Pagination hasNext={true} page={2} changePage={changePage} />;
    })
    .add("doensn't have next, on Page 2", () => {
        return <Pagination hasNext={false} page={2} changePage={changePage} />;
    })
    .add("doensn't have next, on Page 1", () => {
        return <Pagination hasNext={false} page={1} changePage={changePage} />;
    });
