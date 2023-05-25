export interface allProduct {
  products: product[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface product {
  id?: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isDeleted?: boolean;
  deletedOn?: Date;
}
