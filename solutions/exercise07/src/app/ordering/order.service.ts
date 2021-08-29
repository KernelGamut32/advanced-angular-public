import { Injectable } from '@angular/core';
import { OrderDetail } from './order-detail.model';
import { OrderHeader } from './order-header.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Array<OrderHeader> = [
    {
      id: 1,
      orderNumber: 'BCD-123',
      description: 'This is order BCD-123',
      customerName: 'BCD Company',
      total: 72.51,
      orderDetails: [] as Array<OrderDetail>
    },
    {
      id: 2,
      orderNumber: 'ABC-123',
      description: 'This is order ABC-123',
      customerName: 'ABC Company',
      total: 19.99,
      orderDetails: [] as Array<OrderDetail>
    },
    {
      id: 3,
      orderNumber: 'CDE-123',
      description: 'This is order CDE-123',
      customerName: 'CDE Company',
      total: 11.14,
      orderDetails: [] as Array<OrderDetail>
    },
    {
      id: 4,
      orderNumber: 'ABC-789',
      description: 'This is order ABC-789',
      customerName: 'ABC Company',
      total: 9.99,
      orderDetails: [] as Array<OrderDetail>
    },
    {
      id: 5,
      orderNumber: 'CDE-456',
      description: 'This is order CDE-456',
      customerName: 'CDE Company',
      total: 99.00,
      orderDetails: [] as Array<OrderDetail>
    },
    {
      id: 6,
      orderNumber: 'ABC-456',
      description: 'This is order ABC-456',
      customerName: 'ABC Company',
      total: 109.58,
      orderDetails: [] as Array<OrderDetail>
    },
  ];

  constructor() { }

  getAllOrders(): Array<OrderHeader> {
    return this.orders;
  }
}
