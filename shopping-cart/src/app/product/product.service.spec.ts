import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductService } from './product.service';
import { DataMockingService } from '../services/data-mocking.service';
import { InventoryStatus, Product } from '../models/product.model';
import { InventoryService } from './inventory.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let dataMockingService: DataMockingService;
  let productSet: any[];
  let mockInventoryService: jasmine.SpyObj<InventoryService>;

  beforeEach(() => {
    mockInventoryService = jasmine.createSpyObj('InventoryService', ['evaluateStatus']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: InventoryService, useValue: mockInventoryService }
      ]
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
    dataMockingService = TestBed.inject(DataMockingService);
    productSet = dataMockingService.products;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all products', () => {
    service.retrieveAllProducts().subscribe(products => {
      expect(products.length).toBe(10);
    });
    const req = httpTestingController.expectOne('api/products');
    expect(req.request.method).toEqual('GET');
    req.flush(productSet);
  });

  it('should retrieve product by id', () => {
    service.retrieveProductById(3).subscribe(product => {
      expect(product).toEqual(productSet.find(p => p.id === 3));
    });
    const req = httpTestingController.expectOne('api/products/3');
    expect(req.request.method).toEqual('GET');
    req.flush(productSet.find(p => p.id === 3));
  });

  it('should create a product using mocked inventory service', () => {
    mockInventoryService.evaluateStatus.and.returnValue(of(InventoryStatus.Critical));
    const newProduct = { id: 11, catalogNumber: 'AAABBB222', description: 'Test product', unitCost: 1.99, quantityInStock: 15 } as Product;
    service.createProduct(newProduct).subscribe(product => {
      expect(product).toEqual(newProduct);
      expect(product.inventoryStatus).toEqual(InventoryStatus.Critical);
    });
    const req = httpTestingController.expectOne('api/products');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newProduct);
    req.flush(newProduct);
  });

  it('should edit an existing product with back order quantity using mocked inventory service', () => {
    mockInventoryService.evaluateStatus.and.returnValue(of(InventoryStatus['Back Order']));
    const editProduct = { ...productSet[0], unitCost: 10000.99, quantityInStock: -100 };
    service.editProduct(editProduct).subscribe(product => {
      expect(product.unitCost).toEqual(10000.99);
      expect(product.quantityInStock).toEqual(-100);
      expect(product.inventoryStatus).toEqual(InventoryStatus['Back Order']);
    });
    const req = httpTestingController.expectOne('api/products/1');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(editProduct);
    req.flush(editProduct);
  });

  it('should delete an existing product', () => {
    service.deleteProduct(11).subscribe();
    const req = httpTestingController.expectOne('api/products/11');
    expect(req.request.method).toEqual('DELETE');
    req.flush('');
  });
});
