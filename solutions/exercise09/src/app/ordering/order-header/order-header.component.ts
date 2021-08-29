import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderHeader } from '../order-header.model';
import { OrderService } from '../order.service';
import { OrderSorterPipe, SortOrder } from '../pipes/order-sorter.pipe';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit, OnDestroy {

  sortOrder = SortOrder.Ascending;
  orders: Array<OrderHeader>;

  private orderSorter = new OrderSorterPipe();
  private subscription: Subscription;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.subscription = this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending;
    this.orderSorter.transform(this.orders, 'customerName', 'total', this.sortOrder);
  }

  trackOrdersById(order: OrderHeader): number {
    return order.id;
  }

}
