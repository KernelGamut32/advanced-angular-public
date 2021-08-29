import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderHeader } from '../order-header.model';
import { OrderService } from '../order.service';
import { OrderSorterPipe, SortOrder } from '../pipes/order-sorter.pipe';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  sortOrder = SortOrder.Ascending;
  orders: Array<OrderHeader>;

  private orderSorter = new OrderSorterPipe();

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getAllOrders();
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === SortOrder.Ascending ? SortOrder.Descending : SortOrder.Ascending;
    this.orderSorter.transform(this.orders, 'customerName', 'total', this.sortOrder);
  }

  trackOrdersById(index: number, order: OrderHeader): number {
    return order.id;
  }

}
