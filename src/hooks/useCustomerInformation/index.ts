/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
// Entities
import { ICustomerInformationProps } from '../../entities/Payment';
import Country from '../../entities/Country';
import Tax from '../../entities/Tax';
// Atoms
import { customerInfoAtom, orderTabAtom, taxAtom, totalAtom } from '../../atoms/payment';
import { countriesAtom, queryAtom as queryCountryAtom, startPageAtom as startPageCountryAtom } from '../../atoms/country';
import { taxesAtom, queryAtom as queryTaxAtom, startPageAtom as startPageTaxAtom } from '../../atoms/tax';
import { planSelectedAtom } from '../../atoms/plan';
// Services
import { getCountries } from '../../services/countries';
import { getTaxes } from '../../services/tax';
import { waitFor } from '../../utils/wait';

const useCustomerInformation = (values: ICustomerInformationProps) => {
  const navigate = useNavigate();
  const [ isLoading, setIsLoading ] = useState(false);
  const [ , setCustomerInfo ] = useAtom(customerInfoAtom);
  const [ , setOrderTab ] = useAtom(orderTabAtom);
  const [ countries, setCountries ] = useAtom(countriesAtom);
  const [ queryCountry, ] = useAtom(queryCountryAtom);
  const [ , setStartPageCountry ] = useAtom(startPageCountryAtom);
  const [ taxes, setTaxes ] = useAtom(taxesAtom);
  const [ queryTax, ] = useAtom(queryTaxAtom);
  const [ , setStartPageTax ] = useAtom(startPageTaxAtom);
  const [ planSelected, ] = useAtom(planSelectedAtom);
  const [ , setTax ] = useAtom(taxAtom);
  const [ , setTotal ] = useAtom(totalAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const buttons = useMemo(() => ([
    { id: 1, text: 'BACK', type: 'button', isLoading, onClick: () => navigate('/') },
    { id: 2, text: 'CONTINUE', type: 'submit', isLoading }
  ]), [isLoading]);

  const registerCustomerInformation: any = async () => {
    try {
      setIsLoading(true);
      setCustomerInfo(values);
      if (planSelected) {
        const taxRate: number | undefined = taxes.find(tax => tax.id === +values.city)?.taxRate;
        const tax: number = taxRate ? Math.ceil( (planSelected.price * taxRate) ) : 0;
        const newTotal = taxRate ? ( planSelected.price + tax ) : planSelected.price;
        setTax(tax);
        setTotal(newTotal);
      }
      await waitFor(100);
      setOrderTab(1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCountries = async (page = 1, limit = 20, activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response: Country[] | unknown = await getCountries(queryCountry, newPage, limit);
      if (response instanceof Array) {
        setCountries(response);
        if (activeLoadMore) {
          setStartPageCountry(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPageCountry(1);
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

  const fetchTaxes = async (page = 1, limit = 100, activeLoadMore = false) => {
    try {
      setIsLoading(true);
      const newPage = (!activeLoadMore && page >= 1) ? 1 : page;
      const response: Tax[] | unknown = await getTaxes(queryTax, newPage, limit);
      if (response instanceof Array) {
        setTaxes(response);
        if (activeLoadMore) {
          setStartPageTax(page);
        } else if(!activeLoadMore && page >= 1) {
          setStartPageTax(1);
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
    fetchCountries();
    fetchTaxes();
    return () => {
      setDidMount(false);
    }
  }, []);

  return [
    registerCustomerInformation,
    isLoading,
    buttons,
    countries,
    taxes,
  ];
};

export default useCustomerInformation;