import Stripe from "stripe";

export interface Item {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  prime?: boolean;
  index?: number;
}

export interface Order {
  id: string;
  amount: number;
  amountShipping: number;
  images: string[];
  items: Stripe.LineItem[];
  timestamp: number;
}
