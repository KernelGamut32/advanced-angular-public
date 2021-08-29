import { OrderDetail } from './order-detail.model';

export class OrderHeader {
  id: number;
  orderNumber: string;
  description: string;
  total: number;
  orderDetails: Array<OrderDetail>;
}
