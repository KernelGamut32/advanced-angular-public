import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../order-detail.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail = new OrderDetail();

  constructor() { }

  ngOnInit(): void {
    this.orderDetail.id = 1;
    this.orderDetail.orderHeaderId = 1;
    this.orderDetail.productNumber = 'AAA33200';
    this.orderDetail.quantity = 25;
    this.orderDetail.total = 199.99;
  }

}
