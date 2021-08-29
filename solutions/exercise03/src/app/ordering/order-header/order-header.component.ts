import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../order-detail.model';
import { OrderHeader } from '../order-header.model';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  orderHeader = new OrderHeader();

  constructor() { }

  ngOnInit(): void {
    this.orderHeader.id = 1;
    this.orderHeader.orderNumber = 'ABC-123';
    this.orderHeader.description = 'This is order ABC-123';
    this.orderHeader.total = 0;
    this.orderHeader.orderDetails = new Array<OrderDetail>();
  }

}
