import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OrderDetail } from '../order-detail.model';
import { OrderHeader } from '../order-header.model';
import { OrderService } from '../order.service';
import { switchMap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit, OnDestroy {

  order: OrderHeader;

  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.orderService.getOrderById(id);
      }),
      map(order => this.order = order)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  trackOrderDetailsById(index: number, orderDetail: OrderDetail): number {
    return orderDetail.id;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
