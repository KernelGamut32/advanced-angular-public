export enum InventoryStatus {
  'Stocked',
  'Low',
  'Critical',
  'Back Order'
}

export interface Product {
  id: number;
  catalogNumber: string;
  description: string;
  unitCost: number;
  quantityInStock: number;
  inventoryStatus: InventoryStatus;
}
