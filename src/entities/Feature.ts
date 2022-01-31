export interface IFeature {
  id: number;
  description: string;
  personalUse: boolean;
  familyUse: boolean;
}

class Feature implements IFeature {
  id: number;
  description: string;
  personalUse: boolean;
  familyUse: boolean;

  constructor(feature: IFeature) {
    this.id = feature.id;
    this.description = feature.description;
    this.personalUse = feature.personalUse;
    this.familyUse = feature.familyUse;
  }
}

export default Feature;