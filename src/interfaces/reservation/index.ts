import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { TableInterface } from 'interfaces/table';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  user_id: string;
  restaurant_id: string;
  table_id?: string;
  date: any;
  time: any;
  number_of_guests: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  table?: TableInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  restaurant_id?: string;
  table_id?: string;
}
