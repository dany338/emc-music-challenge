/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { completeOrderAtom, customerInfoAtom, orderTabAtom, paymentSelectionAtom } from '../../atoms/payment';
import { planSelectedAtom } from '../../atoms/plan';
import { waitFor } from "../../utils/wait";

const usePaymentSuccess = () => {
  const navigate = useNavigate();
  const [ , setOrderTab ] = useAtom(orderTabAtom);
  const [ , setPaymentSelection ] = useAtom(paymentSelectionAtom);
  const [ , setCustomerInfo ] = useAtom(customerInfoAtom);
  const [ , setPlanSelected ] = useAtom(planSelectedAtom);
  const [ , setCompleteOrder ] = useAtom(completeOrderAtom);

  const onClearAll = async () => {
    setPaymentSelection(null);
    setCustomerInfo(null);
    setPlanSelected(null);
    setOrderTab(0);
    setCompleteOrder(false);
    await waitFor(100);
    navigate('/');
  };

  return [
    onClearAll,
  ];
};

export default usePaymentSuccess;