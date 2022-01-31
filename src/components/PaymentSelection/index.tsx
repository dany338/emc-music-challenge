import { lazy } from 'react';
import { IPaymentSelectionProps } from '../../entities/Payment';
import usePaymentSelection from '../../hooks/usePaymentSelection';
import useValidation from '../../hooks/useValidation';
import { validatePaymentSelection } from '../../utils/validations';
import {
  Container,
  GroupFields,
  CreditCard,
  PayPal,
} from './styled';
import PayPalLogo from '../../assets/logo/paypal.png';
import { useAtom } from 'jotai';
import { paymentSelectionAtom } from '../../atoms/payment';

const TextField = lazy(() => import('../TextField'));
const ButtonsOrder = lazy(() => import('../ButtonsOrder'));

const initialState = {
  paymentType: 'Credit Card',
  cardNumber: '',
  cardName: '',
  cardExpiryDate: '',
  cardCvv: '',
} as IPaymentSelectionProps | any;

const PaymentSelection = () => {
  const [ paymentSelection, ] = useAtom(paymentSelectionAtom);
  const [
    errors,
    values,
    handleChange,
    handleSubmit
  ] = useValidation(paymentSelection ? paymentSelection : initialState, validatePaymentSelection, () => registerCompleteOrder());

  const [
    registerCompleteOrder,
    ,
    buttons,
  ] = usePaymentSelection(values);

  return (
    <Container>
      <div className="form">
        <span className="description">Customer information</span>
        <form onSubmit={handleSubmit} noValidate={true}>
          <CreditCard>
            <GroupFields>
              <div>
                <input title="Payment type" type="radio" name="paymentType" value="Credit Card" onChange={handleChange} checked={true} />{''}
                <label htmlFor="paymentType">Credit Card</label>
              </div>
            </GroupFields>
            <GroupFields>
              <div>
                <p className="credit-card--description">
                  Safe money transfer using your bank account, Visa, Master, Discover,
                  American Express.
                </p>
              </div>
            </GroupFields>
            <GroupFields position="flex-start">
              <TextField position="flex-start" type="text" typeInput={'text'} name="cardNumber" placeholder="Card number" value={values.cardNumber} onChange={handleChange} errors={(errors.cardNumber && errors.cardNumber !== '') && (errors.cardNumber)} />
            </GroupFields>
            <GroupFields>
              <TextField type="text" typeInput={'text'} name="cardName" placeholder="Card name" value={values.cardName} onChange={handleChange} errors={(errors.cardName && errors.cardName !== '') && (errors.cardName)} />
              <TextField type="text" typeInput={'text'} name="cardExpiryDate" placeholder="Card expiry date" value={values.cardExpiryDate} onChange={handleChange} errors={(errors.cardExpiryDate && errors.cardExpiryDate !== '') && (errors.cardExpiryDate)} />
              <TextField type="text" typeInput={'text'} name="cardCvv" placeholder="Card cvv code" value={values.cardCvv} onChange={handleChange} errors={(errors.cardCvv && errors.cardCvv !== '') && (errors.cardCvv)} />
            </GroupFields>
          </CreditCard>
          <PayPal>
            <GroupFields>
              <input title="Payment type" type="radio" name="paymentType" value="PayPal" onChange={handleChange} />
              <label htmlFor="paymentType">PayPal</label>
              <img src={PayPalLogo} alt="PayPal" />
            </GroupFields>
            <GroupFields>
              <div>
                <p className="paypal--description">
                  You will be redirected to PayPal website to complete your purchase
                  securely.
                </p>
              </div>
            </GroupFields>
          </PayPal>
          <GroupFields>
            <ButtonsOrder buttons={buttons} />
          </GroupFields>
        </form>
      </div>
    </Container>
  );
};

export default PaymentSelection;
