import { lazy } from 'react';
import {
  Container,
  Wrapper,
  Tabs,
  ContainerTabs,
  ContentTab,
  ContainerViews,
} from './styled';
import { orderTabAtom } from '../../atoms/payment';
import { useAtom } from 'jotai';

const TabButton = lazy(() => import('../TabButton'));
const CustomerInformation = lazy(() => import('../CustomerInformation'));
const TermsAndConditions = lazy(() => import('../TermsAndConditions'));
const PaymentSelection = lazy(() => import('../PaymentSelection'));
const SelectedPlanView = lazy(() => import('../SelectedPlanView'));
const SubtotalView = lazy(() => import('../SubtotalView'));
const CreditCardPreview = lazy(() => import('../CreditCardPreview'));
const OrderSummary = lazy(() => import('../OrderSummary'));

const FormOrder = () => {
  const [ orderTab, setOrderTab ] = useAtom(orderTabAtom);

  return (
    <Container>
      <Wrapper>
        <ContainerTabs>
          <Tabs>
            <TabButton title="1. Customer Information" onClick={() => setOrderTab(0)} active={(orderTab === 0).toString()} />
            <TabButton title="2. ECM Music Terms and Conditions" onClick={() => setOrderTab(1)} active={(orderTab === 1).toString()} />
            <TabButton title="3. Payment Selection" onClick={() => setOrderTab(2)} active={(orderTab === 2).toString()} />
          </Tabs>
          <ContentTab>
            {orderTab === 0 ? (
              <CustomerInformation />
            ) : orderTab === 1 ? (
              <TermsAndConditions />
            ) : orderTab === 2 ? (
              <PaymentSelection />
            ) : null}
          </ContentTab>
        </ContainerTabs>
        <ContainerViews>
          {orderTab === 0 ? (
            <SelectedPlanView />
          ) : orderTab === 1 ? (
            <>
              <SelectedPlanView />
              <SubtotalView />
            </>
          ) : orderTab === 2 ? (
            <>
              <CreditCardPreview />
              <OrderSummary />
            </>
          ) : null}
        </ContainerViews>
      </Wrapper>
    </Container>
  );
};

export default FormOrder;
