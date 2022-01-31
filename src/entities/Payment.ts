export interface IPayment {
  id?: number;
  userId: number;
  planId: number;
  createDate: string;
  firstName: string;
  lastName: string;
  address: string;
  outsideUS: boolean;
  country: string | number;
  city: string | number;
  postalCode: string;
  phoneNumber: string;
  paymentType: string;
  total: number;
}

export interface ICustomerInformationProps {
  firstName: string;
  lastName: string;
  address: string;
  outsideUS: boolean;
  country: string | number;
  city: string | number;
  postalCode: string;
  phoneNumber: string;
};

export interface IPaymentSelectionProps {
  paymentType: string;
  cardNumber: number;
  cardName: string;
  cardExpiryDate: string;
  cardCvv: number;
};

class Payment implements IPayment {
  id?: number;
  userId: number;
  planId: number;
  createDate: string;
  firstName: string;
  lastName: string;
  address: string;
  outsideUS: boolean;
  country: string | number;
  city: string | number;
  postalCode: string;
  phoneNumber: string;
  paymentType: string;
  total: number;

  constructor(payment: IPayment) {
    this.id = payment?.id;
    this.userId = payment.userId;
    this.planId = payment.planId;
    this.createDate = payment.createDate;
    this.firstName = payment.firstName;
    this.lastName = payment.lastName;
    this.address = payment.address;
    this.outsideUS = payment.outsideUS;
    this.country = payment.country;
    this.city = payment.city;
    this.postalCode = payment.postalCode;
    this.phoneNumber = payment.phoneNumber;
    this.paymentType = payment.paymentType;
    this.total = payment.total;
  }
}

export default Payment;
