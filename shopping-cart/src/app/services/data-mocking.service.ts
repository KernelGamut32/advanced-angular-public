import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { InventoryStatus } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataMockingService implements InMemoryDbService {

  private productSet = [
    { id: 1, catalogNumber: 'YTEWW123', description: 'High-speed blender', unitCost: 99.99, quantityInStock: 1000, inventoryStatus: InventoryStatus.Stocked },
    { id: 2, catalogNumber: 'UODFA003', description: 'X-large umbrella', unitCost: 10.33, quantityInStock: 10, inventoryStatus: InventoryStatus.Critical },
    { id: 3, catalogNumber: 'PIDDW019', description: '65" 4K television', unitCost: 1699.88, quantityInStock: 100, inventoryStatus: InventoryStatus.Stocked },
    { id: 4, catalogNumber: 'AQMXV101', description: 'Medium-duty leaf blower', unitCost: 199.99, quantityInStock: 4, inventoryStatus: InventoryStatus.Critical },
    { id: 5, catalogNumber: 'AQWER555', description: 'Heavy-duty air conditioner', unitCost: 499.00, quantityInStock: -10, inventoryStatus: InventoryStatus['Back Order'] },
    { id: 6, catalogNumber: 'RBGFD010', description: 'Mahogany bookcase', unitCost: 799.99, quantityInStock: 11, inventoryStatus: InventoryStatus.Critical },
    { id: 7, catalogNumber: 'WQOOO909', description: '25-piece wrench set', unitCost: 59.01, quantityInStock: 1900, inventoryStatus: InventoryStatus.Stocked },
    { id: 8, catalogNumber: 'IOPDZ003', description: 'Industrial-strength cell phone case', unitCost: 64.99, quantityInStock: 500, inventoryStatus: InventoryStatus.Stocked },
    { id: 9, catalogNumber: 'EWRRE003', description: 'Emergency flare kit', unitCost: 11.45, quantityInStock: 14, inventoryStatus: InventoryStatus.Critical },
    { id: 10, catalogNumber: 'TXCZZ055', description: 'Towel rack', unitCost: 51.09, quantityInStock: 0, inventoryStatus: InventoryStatus.Critical }
  ];

  constructor() { }

  createDb(): any {
    return {
      products: this.productSet
    };
  }

  get products(): any[] {
    return this.productSet;
  }

}
