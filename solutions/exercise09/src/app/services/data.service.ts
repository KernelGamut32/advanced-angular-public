import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OrderHeader } from '../ordering/order-header.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(): any {
    return {
      orders: [
        {
          id: 1,
          orderNumber: 'BCD-123',
          description: 'This is order BCD-123',
          customerName: 'BCD Company',
          total: 72.51,
          orderDetails: [
            { id: 1, orderHeaderId: 1, productNumber: 'DSSA33', quantity: 20, total: 13.99 },
            { id: 2, orderHeaderId: 1, productNumber: 'BYGHA33', quantity: 11, total: 1.99 }
          ]
        },
        {
          id: 2,
          orderNumber: 'ABC-123',
          description: 'This is order ABC-123',
          customerName: 'ABC Company',
          total: 19.99,
          orderDetails: []
        },
        {
          id: 3,
          orderNumber: 'CDE-123',
          description: 'This is order CDE-123',
          customerName: 'CDE Company',
          total: 11.14,
          orderDetails: [
            { id: 3, orderHeaderId: 3, productNumber: 'YAXDA33', quantity: 101, total: 12.00 }
          ]
        },
        {
          id: 4,
          orderNumber: 'ABC-789',
          description: 'This is order ABC-789',
          customerName: 'ABC Company',
          total: 9.99,
          orderDetails: [
            { id: 4, orderHeaderId: 4, productNumber: 'DSSA33', quantity: 20, total: 13.99 },
            { id: 5, orderHeaderId: 4, productNumber: 'XYADD3345', quantity: 1089, total: 11000.15 },
            { id: 6, orderHeaderId: 4, productNumber: 'BYGHA33', quantity: 8, total: 9.99 }
          ]
        },
        {
          id: 5,
          orderNumber: 'CDE-456',
          description: 'This is order CDE-456',
          customerName: 'CDE Company',
          total: 99.00,
          orderDetails: []
        },
        {
          id: 6,
          orderNumber: 'ABC-456',
          description: 'This is order ABC-456',
          customerName: 'ABC Company',
          total: 109.58,
          orderDetails: [
            { id: 7, orderHeaderId: 6, productNumber: 'YAVVPODD198', quantity: 1, total: 9504.12 }
          ]
        }
      ] as Array<OrderHeader>
    };
  }
}
