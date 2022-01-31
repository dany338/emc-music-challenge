export interface IPlan {
  id: number;
  name: string;
  price: number;
  active: boolean;
}

class Plan implements IPlan {
  id: number;
  name: string;
  price: number;
  active: boolean;

  constructor(plan: IPlan) {
    this.id = plan.id;
    this.name = plan.name;
    this.price = plan.price;
    this.active = plan.active;
  }
}

export default Plan;