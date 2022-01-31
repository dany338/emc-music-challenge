import { ICustomerInformationProps, IPaymentSelectionProps } from '../entities/Payment';

export interface ISignUpProps {
  role: string;
  name: string;
  alias: string;
  avatarUrl: string;
  notifications: number;
  email: string;
  password: string;
};

export interface ISignInProps {
  email: string;
  password: string;
};

export interface IPaymentProps {
  userId: number;
  planId: number;
  createDate: Date;
  firstName: string;
  lastName: string;
  address: string;
  outsideUS: boolean;
  country: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
  paymentType: string;
  cardNumber: number;
  nameCard: string;
  expiryDate: string;
  cvvCode: number;
};

export const validateSignUp = (values: ISignUpProps) => {
  const errors = {};
  validateRole(values.role, errors);
  validateAlias(values.alias, errors);
  validateAvatarUrl(values.avatarUrl, errors);
  validateName(values.name, errors);
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

export const validateSignIn = (values: ISignInProps) => {
  const errors = {};
  validateEmail(values.email, errors);
  validatePassword(values.password, errors);
  return errors;
};

export const validateCustomerInformation = (values: ICustomerInformationProps) => {
  console.log('values', values);
  const errors = {};
  validateFirstName(values.firstName, errors);
  validateLastName(values.lastName, errors);
  validateAddress(values.address, errors);
  validateOutsideUS(values.outsideUS, errors);
  validateCountry(values.country, errors);
  validateCity(values.city, errors);
  validatePostalCode(values.postalCode, errors);
  validatePhoneNumber(values.phoneNumber, errors);
  return errors;
};

export const validatePaymentSelection = (values: IPaymentSelectionProps) => {
  console.log('values', values);
  const errors = {};
  validatePaymentType(values.paymentType, errors);
  if (values.paymentType === 'Credit Card') {
    console.log('entro', values);
    validateCardNumber(values.cardNumber, errors);
    validateCardName(values.cardName, errors);
    validateExpiryDate(values.cardExpiryDate, errors);
    validateCvvCode(values.cardCvv, errors);
  }
  return errors;
};

// Validates user account
const validateRole = (role: string, errors: any) => {
  if (!role) {
    errors.role = 'Role is required';
  }
};

const validateAlias = (alias: string, errors: any) => {
  if (!alias) {
    errors.alias = 'Aias is required';
  }
};

const validateAvatarUrl = (avatarUrl: string, errors: any) => {
  if (!avatarUrl) {
    errors.avatarUrl = 'AvatarUrl is required';
  }
};

const validateName = (name: string, errors: any) => {
  if (!name) {
    errors.name = 'Full name is required';
  }
};

const validateEmail = (email: string, errors: any) => {
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }
};

const validatePassword = (password: string, errors: any) => {
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
};

// Validates payments
const validateFirstName = (firstName: string, errors: any) => {
  if (!firstName) {
    errors.firstName = 'First name is required';
  }
};

const validateLastName = (lastName: string, errors: any) => {
  if (!lastName) {
    errors.lastName = 'Last name is required';
  }
};

const validateAddress = (address: string, errors: any) => {
  if (!address) {
    errors.address = 'Address is required';
  }
};

const validateOutsideUS = (outsideUS: boolean, errors: any) => {
  if (!outsideUS) {
    errors.outsideUS = 'Outside US is required';
  }
};

const validateCountry = (country: string | number, errors: any) => {
  if (!country) {
    errors.country = 'Country is required';
  }
};

const validateCity = (city: string  | number, errors: any) => {
  if (!city) {
    errors.city = 'City is required';
  }
};

const validatePostalCode = (postalCode: string, errors: any) => {
  if (!postalCode) {
    errors.postalCode = 'Postal code is required';
  }
};

const validatePhoneNumber = (phoneNumber: string, errors: any) => {
  if (!phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  }
};

const validatePaymentType = (paymentType: string, errors: any) => {
  if (!paymentType) {
    errors.paymentType = 'Payment type is required';
  }
};

const validateCardNumber = (cardNumber: number, errors: any) => {
  if (!cardNumber) {
    errors.cardNumber = 'Card number is required';
  } else if (isNaN(cardNumber)) {
    errors.cardNumber = 'Card number must be a number';
  } else if (`${cardNumber}`.length < 4) {
    errors.cardNumber = 'Card number must be 4 digits';
  }
};

const validateCardName = (cardName: string, errors: any) => {
  if (!cardName) {
    errors.cardName = 'Name card is required';
  }
};

const validateExpiryDate = (cardExpiryDate: string, errors: any) => {
  if (!cardExpiryDate) {
    errors.cardExpiryDate = 'Expiry date card is required';
  }
};

const validateCvvCode = (cardCvv: number, errors: any) => {
  if (!cardCvv) {
    errors.cardCvv = 'Cvv code card is required';
  } else if (`${cardCvv}`.length < 3) {
    errors.cvvCode = 'CVV must be at least 3 characters';
  } else if (`${cardCvv}`.length > 4) {
    errors.cardCvv = 'CVV must be at max 4 characters for American Express - CID and Hipercard - CVC';
  }
};