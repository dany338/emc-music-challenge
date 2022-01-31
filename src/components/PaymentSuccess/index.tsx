import TextButton from '../TextButton';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Wrapper,
  ContainerSuccess
} from './styled';
import ImagePaymentSuccess from '../../assets/images/payment-success.png';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <Container data-testid="notfound-container">
      <Wrapper>
        <ContainerSuccess image={ImagePaymentSuccess}>
          <div className="description">
            <span>ORDER SUCCESSFULLY PLACED</span>
            {/* <p>order successfully placed.</p> */}
            <TextButton width="9.563" type="button" text="GO BACK TO HOME PAGE" onClick={() => navigate('/')} />
          </div>
          <div className="image" />
        </ContainerSuccess>
      </Wrapper>
    </Container>
  );
};

export default PaymentSuccess;
