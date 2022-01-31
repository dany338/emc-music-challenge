/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import { queryAtom, paymentsAtom, startPageAtom } from '../../atoms/payment';
import { getPayments } from '../../services/payment';
import Plan from '../../entities/Plan';

const usePayment = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ query, setQuery ] = useAtom(queryAtom);
  const [ payments, setPayments ] = useAtom(paymentsAtom);
  const [ startPage, setStartPage ] = useAtom(startPageAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const onChangeQuery = (value: string): void => {
    setQuery(value);
  };

  const filtered = useMemo(() => payments.filter(({ firstName, lastName }) =>
    query !== "" ? ( firstName.toLowerCase().includes(query.toLowerCase()) || lastName.toLowerCase().includes(query.toLowerCase()) ) : true
  ), [payments, query]);

  const fetchPayments = async (page = 1, limit = 20, activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response: Plan[] | unknown = await getPayments(query, newPage, limit);
      if (response instanceof Array) {
        setPayments(response);
        if (activeLoadMore) {
          setStartPage(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPage(1);
        }
      } else {
        console.log('response', response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setDidMount(true);
    fetchPayments();
    return () => {
      setDidMount(false);
    }
  }, []);

  return [
    query,
    startPage,
    isLoading,
    payments,
    filtered,
    onChangeQuery,
    fetchPayments,
  ];
};

export default usePayment;