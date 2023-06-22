import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuItemInterface {
  id?: string;
  restaurant_id: string;
  name: string;
  description?: string;
  price: number;
  ingredients?: string;
  allergens?: string;
  created_at?: any;
  updated_at?: any;

  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface MenuItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  restaurant_id?: string;
  name?: string;
  description?: string;
  ingredients?: string;
  allergens?: string;
}
