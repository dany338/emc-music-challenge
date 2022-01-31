import { useAtom } from 'jotai';
import { planSelectedAtom } from '../../atoms/plan';
import {
  Container,
} from './styled';

const SelectedPlanView = () => {
  const [ planSelected, ] = useAtom(planSelectedAtom);
  if (!planSelected) return null;

  return (
    <Container>
        <div className="title">Selected plan</div>
        <div className="card">
          <div className="card-content">
            <div className="plan">{planSelected.name}</div>
            <div className="total">$ {planSelected.price} USD / mo</div>
          </div>
        </div>
      </Container>
  );
};

export default SelectedPlanView;
