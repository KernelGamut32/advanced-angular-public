import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderHeader } from './order-header.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'api/orders/';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Array<OrderHeader>> {
    return this.http.get<Array<OrderHeader>>(this.ordersUrl);
  }

  getOrderById(id: number): Observable<OrderHeader> {
    return this.http.get<OrderHeader>(`${this.ordersUrl}${id}`);
  }
}
