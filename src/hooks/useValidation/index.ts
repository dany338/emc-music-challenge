import { useState, useEffect, useCallback } from 'react';
import { useAtom } from 'jotai';
import { cardPreviewAtom } from '../../atoms/payment';

export interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
  target: EventTarget & T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  nativeEvent: Event;
  preventDefault(): void;
  stopPropagation(): void;
  timeStamp: Date;
  type: string;
};

const useValidation = (initialState: any, validate: any, fn: any) => {
  const [ values, setValues ] = useState<any>(initialState);
  const [ errors, setErrors ] = useState({})
  const [ request, setRequest ] = useState(false);
  const [ cardPreview, setCardPreview ] = useAtom(cardPreviewAtom);
  const [ , setDidMount] = useState<boolean>(false);

  const memoizedCallback = useCallback(
    () => {
      setRequest(!request);
    },
    [request],
  );

  const handleChange = (e: SyntheticEvent<HTMLFormElement>, type = 'text'): void => {
    setValues({
      ...values,
      [e.target.name]: type === 'radio' ? e.target.checked : e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
    // Exeption case for credit card preview
    if (e.target.name === 'cardNumber' || e.target.name === 'cardName' || e.target.name === 'cardExpiryDate') {
      console.log([e.target.name], e.target.value)
      setCardPreview({
        ...cardPreview,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const errorsValidation = validate(values);
    console.log('entro', errorsValidation);
    setErrors(errorsValidation);
    setRequest(Object.keys(errorsValidation).length === 0);
    e.stopPropagation();
  };

  useEffect(() => {
    setDidMount(true);
    console.log('useEffect', values, request);
    if (request) {
      const withoutErrors = Object.keys(errors).length === 0 && Object.keys(validate(values)).length === 0;
      if (withoutErrors) {
        console.log('withoutErrors', values);
        fn();
        memoizedCallback();
      }
    }
    return () => {
      setDidMount(false);
    }
  }, [errors, fn, memoizedCallback, request, validate, values]);

  return [
    errors,
    values,
    handleChange,
    handleSubmit
  ];
}

export default useValidation;
