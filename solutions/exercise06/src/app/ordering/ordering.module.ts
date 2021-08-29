import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [OrderComponent, OrderHeaderComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderingModule { }
