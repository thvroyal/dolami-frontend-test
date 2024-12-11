import { Product, Review } from "@/types/product";
import { categories } from "./categories";

const calculateAverageRating = (reviews: Review[]): number => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Number((sum / reviews.length).toFixed(1));
};

export const products: Product[] = Array.from({ length: 15 }).map(
  (_, index) => {
    const reviews = [
      {
        id: `${index}-1`,
        userName: "John Doe",
        rating: 5,
        comment: "Excellent product, exceeded my expectations!",
        date: "2024-03-15",
      },
      {
        id: `${index}-2`,
        userName: "Jane Smith",
        rating: 4,
        comment: "Good quality, fast shipping.",
        date: "2024-03-14",
      },
      {
        id: `${index}-3`,
        userName: "Mike Johnson",
        rating: 2,
        comment: "Very satisfied with the purchase.",
        date: "2024-03-13",
      },
    ];

    return {
      id: index.toString(),
      name: `Product ${index + 1}`,
      creator: {
        name: `Creator ${index + 1}`,
        avatar: "",
      },
      avgRating: calculateAverageRating(reviews),
      price: 10.05,
      images: [],
      description: `This is a detailed description for Product ${
        index + 1
      }. It includes all the important features and benefits that customers need to know.`,
      details: {
        Material: "Premium Quality",
        Dimensions: "10 x 20 x 5 inches",
        Weight: "2.5 lbs",
        Manufacturer: `Company ${index + 1}`,
      },
      reviews,
      categories: [
        categories[index % categories.length].name,
        categories[index % categories.length].children[
          index % categories[index % categories.length].children.length
        ].name,
      ],
    };
  }
);
