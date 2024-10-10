//Search mobile type
export type FormValues = {
  search: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  content?: string;
  slug: string;
  tags: string[];
  images: string[];
  brand: Brand;
  category: Category;
  price: number;
  discount: number;
  details: Detail[];
  reviews: Review[];
};

export type Brand = {
  id: number;
  name: string;
  description: string;
  slug: string;
  image: string;
  total_products: number;
  reviews: {
    avg_review: number;
    total_reviews: number;
  };
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export type Review = {
  id: number;
  review_by: string;
  rating: number;
  review: string;
  likes: number[];
  created_at: string;
};

export type Customer = {
  id: number;
  user: User;
  mobile?: number;
  image?: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
};

export type Detail = {
  key: string;
  value: string;
};

// export type sendEmailTypes = {
//   subject: string;
//   email: string;
//   message: string;
// };
