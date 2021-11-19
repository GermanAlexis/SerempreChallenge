export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: Array<IImages>;
  colors: Array<IDetails>;
  technical_details: Array<ICaracteristic>;
  details: Array<IDetails>;
  warranty: Array<IWarrancyType>;
  features: Array<IFeatures>;
  specs: ISpecification;
}

export interface IImages {
  key: number;
  x1: string;
  x2: string;
  x3: string;
}

export interface IDetails {
  key: number;
  name: string;
  description: string;
}

export interface ISpecification {
  dimension: string;
  usb_standard: string;
  power_suply: string;
  frequency_response_microphone: string;
  frequency_response: string;
  noise_cancelation: string;
}

export interface ICaracteristic {
  name: string;
  images: IImages;
}

export interface IFeatures {
  id: number;
  name: string;
  additionalValue: number;
}
export interface IWarrancyType {
  id: number;
  name: string;
  description: string;
  additionalValue: number;
}
