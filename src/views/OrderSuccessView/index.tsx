import { lazy } from 'react';
import { useAtom } from 'jotai';
import { Container } from './styled';
import { completeOrderAtom } from '../../atoms/payment';

const PaymentSuccess = lazy(() => import('../../components/PaymentSuccess'));

const OrderSuccessView = () => {
  const [ completeOrder, ] = useAtom(completeOrderAtom);
  if (!completeOrder) return null;
  return (
    <Container>
      <PaymentSuccess />
    </Container>
  )
};

export default OrderSuccessView;