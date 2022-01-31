import TextButton from '../TextButton';
import {
  Container,
  Wrapper,
  ContainerSuccess
} from './styled';
import ImagePaymentSuccess from '../../assets/images/payment-success.png';
import usePaymentSuccess from '../../hooks/usePaymentSuccess';

const PaymentSuccess = () => {
  const [ onClearAll ] = usePaymentSuccess();

  return (
    <Container data-testid="notfound-container">
      <Wrapper>
        <ContainerSuccess image={ImagePaymentSuccess}>
          <div className="description">
            <span>ORDER SUCCESSFULLY PLACED</span>
            {/* <p>order successfully placed.</p> */}
            <TextButton width="14.563" type="button" text="GO BACK TO HOME PAGE" onClick={() => onClearAll() } />
          </div>
          <div className="image" />
        </ContainerSuccess>
      </Wrapper>
    </Container>
  );
};

export default PaymentSuccess;
