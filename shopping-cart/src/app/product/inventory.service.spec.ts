import { TestBed } from '@angular/core/testing';
import { InventoryStatus } from '../models/product.model';

import { InventoryService } from './inventory.service';

describe('InventoryService', () => {
  let service: InventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Stocked" for status', (done: DoneFn) => {
    service.evaluateStatus(100).subscribe(status => {
      expect(status).toEqual(InventoryStatus.Stocked);
      done();
    });
  });

  it('should return "Low" for status', (done: DoneFn) => {
    service.evaluateStatus(20).subscribe(status => {
      expect(status).toEqual(InventoryStatus.Low);
      done();
    });
  });

  it('should return "Critical" for status', (done: DoneFn) => {
    service.evaluateStatus(0).subscribe(status => {
      expect(status).toEqual(InventoryStatus.Critical);
      done();
    });
  });

  it('should return "Back Order" for status', (done: DoneFn) => {
    service.evaluateStatus(-1).subscribe(status => {
      expect(status).toEqual(InventoryStatus['Back Order']);
      done();
    });
  });
});
