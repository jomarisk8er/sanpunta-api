export type StoreType = {
  name: string;
  storeHours: string;
  priceRange: string;
  description?: string;
  location: string;
  slug: string;
  image?: string;
  tags?: string[];
};

export type StoreDetailsType = {
  name: string;
  description: string;
  location: string;
  slug: string;
  images: string[];
  priceRange: string;
  operationHours: string;
  geoLocation: string;
  menus: MenuType[];
};

export type MenusType = {
  [key: string]: MenuType[];
};

export type MenuType = {
  name: string;
  price: number;
  description?: string;
  rate?: number;
  category?: string;
};
