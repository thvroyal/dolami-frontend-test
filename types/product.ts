export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  creator: {
    name: string;
    avatar: string;
  };
  avgRating: number;
  price: number;
  images: string[];
  description: string;
  details: {
    [key: string]: string;
  };
  reviews: Review[];
  categories: [string, string];
}
