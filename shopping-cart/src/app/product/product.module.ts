import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
