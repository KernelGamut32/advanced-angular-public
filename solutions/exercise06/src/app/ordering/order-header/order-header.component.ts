import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderHeader } from '../order-header.model';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {

  @Input() orderHeader = new OrderHeader();
  @Output() shipped = new EventEmitter<OrderHeader>();

  constructor() { }

  ngOnInit(): void {
  }

}
