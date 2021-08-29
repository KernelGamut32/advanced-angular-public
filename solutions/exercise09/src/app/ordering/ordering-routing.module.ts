import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderHeaderComponent } from './order-header/order-header.component';

const routes: Routes = [
  {
    path: 'orders',
    component: OrderHeaderComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'orders/:id',
    component: OrderDetailComponent,
    canActivate: [AuthenticationGuard]
  },
  { path: '', redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderingRoutingModule { }
