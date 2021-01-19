import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { InventoryStatus, Product } from '../models/product.model';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'api/products';

  constructor(private http: HttpClient, private inventoryService: InventoryService) { }

  retrieveAllProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.url);
  }

  retrieveProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.inventoryService.evaluateStatus(product.quantityInStock).pipe(
      switchMap((status: InventoryStatus) => {
        product.inventoryStatus = status;
        return this.http.post<Product>(this.url, product);
      })
    );
  }

  editProduct(product: Product): Observable<Product> {
    return this.inventoryService.evaluateStatus(product.quantityInStock).pipe(
      switchMap((status: InventoryStatus) => {
        product.inventoryStatus = status;
        return this.http.put<Product>(`${this.url}/${product.id}`, product);
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(`${this.url}/${id}`);
  }
}
