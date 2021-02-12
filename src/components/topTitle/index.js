import React from 'react';

import { Title, Container } from './styles';

export default function TopTitle(props) {
  
    return (
        <Container>
            <Title>{props.title}</Title>
        </Container>
    );
}