import { Product } from "@/types/product";
import { categories } from "./categories";

export const products: Product[] = Array.from({ length: 15 }).map(
  (_, index) => ({
    id: index.toString(),
    name: `Product name`,
    creator: `Creator name`,
    rating: 5.0,
    price: 10.50,
    categories: [
      categories[index % categories.length].name,
      categories[index % categories.length].children[
        index % categories[index % categories.length].children.length
      ].name,
    ],
  })
);
