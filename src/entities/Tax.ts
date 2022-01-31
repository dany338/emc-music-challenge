export interface ITax {
  id: number;
  countryId: number;
  name: string;
  taxRate: number;
}

class Tax implements ITax {
  id: number;
  countryId: number;
  name: string;
  taxRate: number;

  constructor(tax: ITax) {
    this.id = tax.id;
    this.countryId = tax.countryId;
    this.name = tax.name;
    this.taxRate = tax.taxRate;
  }
}

export default Tax;