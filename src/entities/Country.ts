export interface ICountry {
  id: number;
  name: string;
  zipCode: string;
}

class Country implements ICountry {
  id: number;
  name: string;
  zipCode: string;

  constructor(country: ICountry) {
    this.id = country.id;
    this.name = country.name;
    this.zipCode = country.zipCode;
  }
}

export default Country;