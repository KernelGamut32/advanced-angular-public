import { Component, Input, OnInit } from '@angular/core';
import { OrderDetail } from '../order-detail.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderDetail = new OrderDetail();

  constructor() { }

  ngOnInit(): void {
  }

}
