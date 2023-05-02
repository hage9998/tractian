export interface Asset {
  _id?: string;
  name: string;
  description: string;
  model: string;
  owner?: string;
  status: string;
  healthLevel: number;
  image: string;
}

export interface User {
  _id?: string;
  name: string;
  age: number;
  company?: string;
}

export interface Unit {
  _id?: string;
  name: string;
  description: string;
  company?: string;
}

export interface Company {
  _id?: string;
  name: string;
  description: string;
  model: string;
}
