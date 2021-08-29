import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private transferAgent = new BehaviorSubject<{ valueOne: string, valueTwo: string }>(null);
  transferAgent$ = this.transferAgent.asObservable();

  constructor() { }

  pushData(data: {valueOne: string, valueTwo: string}): void {
    this.transferAgent.next(data);
  }
}
