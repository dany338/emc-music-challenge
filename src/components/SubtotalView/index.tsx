import { useAtom } from 'jotai';
import { planSelectedAtom } from '../../atoms/plan';
import { taxAtom, totalAtom } from '../../atoms/payment';
import {
  Container,
} from './styled';

const SubtotalView = () => {
  const [ planSelected, ] = useAtom(planSelectedAtom);
  const [ total, ] = useAtom(totalAtom);
  const [ tax, ] = useAtom(taxAtom);
  if (!planSelected) return null;

  return (
    <Container>
      <div className="title"></div>
      <div className="card">
        <div className="card-content">
          <div className="card-content--row">
            <div className="label">Subtotal</div>
            <div className="subtotal">{planSelected.price} USD</div>
          </div>
          <div className="card-content--row">
            <div className="label">Tax</div>
            <div className="tax">$ {tax} USD</div>
          </div>
          <div className="line"/>
          <div className="card-content--row">
            <div className="label">Total</div>
            <div className="total">$ {total} USD</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SubtotalView;
