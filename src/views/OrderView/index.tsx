import { lazy } from 'react';
import { Container } from './styled';

const FormOrder = lazy(() => import('../../components/FormOrder'));

const OrderView = () => (
  <Container>
    <FormOrder />
  </Container>
);

export default OrderView;