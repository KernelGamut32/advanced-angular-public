import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { OrderSorterPipe } from './pipes/order-sorter.pipe';

@NgModule({
  declarations: [OrderComponent, OrderHeaderComponent, OrderDetailComponent, OrderSorterPipe],
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
