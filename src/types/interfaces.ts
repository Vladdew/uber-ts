export interface RestaurantPageDataType {
  uuid: string;
  title: string;
  heroImageUrls: { url: string; width: number }[];
  categories: string[];
  etaRange: string | null;
  location: { address: string };
}

export interface SectionProps {
  category: CategoryProps;
}

export interface CategoryProps {
  displayType: any;
  itemUuids: string[];
  subtitle: string;
  title: string;
  uuid: string;
}

export type restaurantSectionsType = CategoryProps[];
export interface ItemProductType {
  title: string;
  imageUrl: string;
  description?: string;
  uuid: string;
  price: number;
  amount?: number;
  itemUuids?: itemUuidsType[];
}

export interface itemUuidsType {
  classifications: any[];
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  uuid: string;
}

export interface OrderType {
  imageUrl: string;
  title: string;
  itemDescription: string;
  price: number;
  amount: number;
  uuid: string;
}

export interface CardProductProps {
  product: ItemProductType;
  changeQty: (param: string, uuid: string) => void;
}

export interface InputProps {
  iconUrl: string;
  value: string | undefined;
  onChange: (e: Event) => void;
  type?: string;
  placeholder: string;
  name?: string;
  className?: string;
  isSmall?: boolean;
  label?: string;
}

export interface ErrorProps {
  message: string;
}

export interface HeaderStateProps {
  address?: string;
  time?: string;
  search?: string;
  isMobileSearchVisible?: boolean;
  isMobileDeliveryInfoVisible?: boolean;
}

export interface RestaurantCardProps {
  imageUrl: string;
  title: string;
  categories: string[];
  etaRange: string;
}

export interface SelectProps {
  name: string;
  value: string;
  options: { value: string; label: string }[];
  iconUrl: string;
}
