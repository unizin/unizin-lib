/* @flow */
import React from 'react';
import styled from 'styled-components';

import theme from '../theme';

type Props = {
    title: ?string,
    text: ?string,
};
export default function Modal({ title, text }: Props) {
    return (
        <Container>
            <h1>{title}</h1>
            <p>{text}</p>
        </Container>
    );
}
const Container = styled.div`
    padding: ${theme.spacing.small};

    h1 {
        font-size: ${theme.fontSizes.plus2};
    }

    p {
        margin: ${theme.spacing.small} 0 0;
    }
`;
