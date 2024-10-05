//Search mobile types
export type FormValues = {
  search: string;
};

//Product Models
export type Product = {
  _id: string;
  name: string;
  featured: boolean;
  slug: string;
  description: string;
  category: Category;
  brand: Brand;
  content: string;
  details: Detail[];
  questions: Question[];
  reviews: Review[];
  subProducts: SubProduct[];
};

export type Detail = {
  name: string;
  value: string;
};

export type Page = {
  _id: string;
  name: string;
  link: string;
};

export type Question = {
  name: string;
  value: string;
};

export type Review = {
  _id?: string;
  reviewBy?: User;
  rating: number;
  review: string;
  likes: string[];
  createdAt: string;
  updatedAt?: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  image: string;
  password: string;
  role: string;
  createdAt?: Date;
  address: Address[];
  // TODO:Complete user
};

export type SubProduct = {
  sku: string;
  style: Style;
  options: Option[];
};

export type Style = {
  name: string;
  color: string;
  image: string;
};

export type Option = {
  qty: number;
  price: number;
  sold: number;
  option: string;
  images: string[];
  discount: number;
};

export type Category = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
};

export type Brand = {
  _id: string;
  name: string;
  link: string;
  slug: string;
  image: string;
};

export type Address = {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  country: string;
  zipCode: string;
  address: string;
  phoneNumber: string;
  state: string;
};

export type sendEmailTypes = {
  subject: string;
  email: string;
  message: string;
};
