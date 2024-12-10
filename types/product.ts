export type Product = {
  id: string;
  name: string;
  creator: string;
  rating: number;
  price: number;
  imageUrl?: string;
  categories: [string, string];
};
