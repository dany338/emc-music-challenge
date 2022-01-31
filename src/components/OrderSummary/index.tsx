import { useAtom } from 'jotai';
import { planSelectedAtom } from '../../atoms/plan';
import { totalAtom } from '../../atoms/payment';
import {
  Container,
} from './styled';

const OrderSummary = () => {
  const [ planSelected, ] = useAtom(planSelectedAtom);
  const [ total, ] = useAtom(totalAtom);
  if (!planSelected) return null;

  return (
    <Container>
      <div className="title">Order summary</div>
      <div className="card">
        <div className="card-content">
          <div className="plan">{planSelected.name}</div>
          <div className="total">Total {total} USD</div>
        </div>
      </div>
    </Container>
  );
};

export default OrderSummary;
