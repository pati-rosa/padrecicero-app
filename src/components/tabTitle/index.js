import React from 'react';

import { useStoreState } from 'easy-peasy';
import { Title, Container, HeaderEmployee } from './styles';

export default function TabTitle(props) {
    const { name, courses } = useStoreState((store) => store);
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
}