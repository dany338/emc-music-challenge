/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { completeOrderAtom, customerInfoAtom, orderTabAtom, paymentSelectionAtom, totalAtom } from '../../atoms/payment';
import { userAtom } from '../../atoms/user';
import { planSelectedAtom } from '../../atoms/plan';
import { IPayment, IPaymentSelectionProps } from "../../entities/Payment";
import { createPayment } from "../../services/payment";
import { waitFor } from "../../utils/wait";

const usePaymentSelection = (values: IPaymentSelectionProps) => {
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ , setOrderTab ] = useAtom(orderTabAtom);
  const [ , setPaymentSelection ] = useAtom(paymentSelectionAtom);
  const [ customerInfo, ] = useAtom(customerInfoAtom);
  const [ user, ] = useAtom(userAtom);
  const [ planSelected, ] = useAtom(planSelectedAtom);
  const [ total, ] = useAtom(totalAtom);
  const [ , setCompleteOrder ] = useAtom(completeOrderAtom);

  const buttons = useMemo(() => ([
    { id: 1, text: 'BACK', type: 'button', isLoading, onClick: () => setOrderTab(1) },
    { id: 2, text: 'COMPLETE ORDER', type: 'submit', isLoading }
  ]), [isLoading]);

  const registerCompleteOrder: any = async () => {
    try {
      setIsLoading(true);
      setPaymentSelection(values);
      if (customerInfo && planSelected) {
        const newPayment: IPayment = {
          ...customerInfo,
          paymentType: values.paymentType,
          userId: user ? user.id : -1,
          planId: planSelected.id,
          createDate: `${new Date()}`,
          total,
        };
        const response = await createPayment(newPayment);
        if (typeof response === 'object') {
          setIsLoading(false);
          setCompleteOrder(true);
          await waitFor(100);
          navigate('/order-successfully-placed');
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [
    registerCompleteOrder,
    isLoading,
    buttons,
  ];
};

export default usePaymentSelection;