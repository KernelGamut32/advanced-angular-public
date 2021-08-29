import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnDestroy {

  private subscription: Subscription;
  transferredData = { valueOne: '', valueTwo: '' };

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
    this.subscription = this.transferService.transferAgent$.subscribe(data => {
      this.transferredData = { ...data };
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
