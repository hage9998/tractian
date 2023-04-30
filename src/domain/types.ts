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
