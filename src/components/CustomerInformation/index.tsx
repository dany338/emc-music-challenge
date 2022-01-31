import { useAtom } from 'jotai';
import { lazy } from 'react';
import { customerInfoAtom } from '../../atoms/payment';
import { ICustomerInformationProps } from '../../entities/Payment';
import useCustomerInformation from '../../hooks/useCustomerInformation';
import useValidation from '../../hooks/useValidation';
import { validateCustomerInformation } from '../../utils/validations'

import {
  Container,
  GroupFields,
} from './styled';

const TextField = lazy(() => import('../TextField'));
const SelectField = lazy(() => import('../SelectField'));
const ToggleSwitch = lazy(() => import('../ToggleSwitch'));
const ButtonsOrder = lazy(() => import('../ButtonsOrder'));

const initialState = {
  firstName: '',
  lastName: '',
  address: '',
  outsideUS: false,
  country: '',
  city: '',
  postalCode: '',
  phoneNumber: '',
};
// https://codesandbox.io/s/react-toggle-component-de4uy?from-embed=&file=/src/components/ToggleSwitch.js:393-397
// https://www.sitepoint.com/react-toggle-switch-reusable-component/
const CustomerInformation = () => {
  const [ customerInfo, ] = useAtom(customerInfoAtom);
  const [
    errors,
    values,
    handleChange,
    handleSubmit
  ] = useValidation(customerInfo ? customerInfo : initialState, validateCustomerInformation, () => registerCustomerInformation());

  const [
    registerCustomerInformation,
    isLoading,
    buttons,
    countries,
    taxes,
  ] = useCustomerInformation(values);

  return (
    <Container>
      <div className="form">
        <span className="description">Customer information</span>
        <form onSubmit={handleSubmit} noValidate={true}>
          <GroupFields>
            <TextField type="text" typeInput={'text'} name="firstName" placeholder="First Name" value={values!.firstName} onChange={handleChange} errors={(errors.firstName && errors.firstName !== '') && (errors.firstName)} />
            <TextField type="text" typeInput={'text'} name="lastName" placeholder="Last Name" value={values.lastName} onChange={handleChange} errors={(errors.lastName && errors.lastName !== '') && (errors.lastName)} />
          </GroupFields>
          <GroupFields>
            <TextField type="text" typeInput={'text'} name="address" placeholder="Address" value={values.address} onChange={handleChange} errors={(errors.address && errors.address !== '') && (errors.address)} />
            <ToggleSwitch checked={values.outsideUS} name="outsideUS" optionLabels={['Yes', 'No']} onChange={handleChange} />
          </GroupFields>
          <GroupFields>
            <SelectField name="country" options={countries} value={values.country} onChange={handleChange} errors={(errors.country && errors.country !== '') && (errors.country)} />
            <SelectField name="city" options={taxes} value={values.city} onChange={handleChange} errors={(errors.city && errors.city !== '') && (errors.city)} />
          </GroupFields>
          <GroupFields>
            <TextField type="text" typeInput={'text'} name="postalCode" placeholder="Postal Code" value={values.postalCode} onChange={handleChange} errors={(errors.postalCode && errors.postalCode !== '') && (errors.postalCode)} />
            <TextField type="text" typeInput={'text'} name="phoneNumber" placeholder="Phone Number" value={values.phoneNumber} onChange={handleChange} errors={(errors.phoneNumber && errors.phoneNumber !== '') && (errors.phoneNumber)} />
          </GroupFields>
          <GroupFields>
            <ButtonsOrder buttons={buttons} />
          </GroupFields>
        </form>
      </div>
    </Container>
  );
};

export default CustomerInformation;
