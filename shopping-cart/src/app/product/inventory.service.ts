import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InventoryStatus } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  evaluateStatus(quantityInStock: number): Observable<InventoryStatus> {
    if (quantityInStock >= 100) {
      return of(InventoryStatus.Stocked);
    } else if (quantityInStock >= 20) {
      return of(InventoryStatus.Low);
    } else if (quantityInStock >= 0) {
      return of(InventoryStatus.Critical);
    } else {
      return of(InventoryStatus['Back Order']);
    }
  }
}
