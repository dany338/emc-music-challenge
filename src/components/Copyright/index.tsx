import React from 'react'
import { Container } from './styled';
import format from '../../utils/format';

const Copyright = () => (
  <Container data-testid="copyright-container">
    <span>Daniel.Gallo © all rights reserved {format(new Date(), 'es', {year: 'numeric'})}</span>
  </Container>
);

export default Copyright;
