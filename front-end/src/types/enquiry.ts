import { Product } from "./product";

export interface Enquiry {
  _id: string;
  fullName: string;
  quantity: number;
  mobile: string;
  address: string;
  demoRequest: boolean;
  productId?: Product;
  createdAt: string;
}
