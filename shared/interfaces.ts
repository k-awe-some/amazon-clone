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
