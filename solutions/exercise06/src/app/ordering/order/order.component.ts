import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../order-detail.model';
import { OrderHeader } from '../order-header.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderHeader = new OrderHeader();
  orderDetail = new OrderDetail();

  constructor() { }

  ngOnInit(): void {
    this.orderHeader.id = 1;
    this.orderHeader.orderNumber = 'ABC-123';
    this.orderHeader.description = '';
    this.orderHeader.total = 0;
    this.orderHeader.orderDetails = new Array<OrderDetail>();

    this.orderDetail.id = 1;
    this.orderDetail.orderHeaderId = 1;
    this.orderDetail.productNumber = 'AAA33200';
    this.orderDetail.quantity = 25;
    this.orderDetail.total = 199.99;
  }

  onShipped(orderHeader: OrderHeader): void {
    console.log(orderHeader);
  }

}
