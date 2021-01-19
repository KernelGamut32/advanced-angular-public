import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { InventoryStatus, Product } from 'src/app/models/product.model';
import swal from 'sweetalert';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products$: Observable<Array<Product>>;
  inventoryStatus: typeof InventoryStatus = InventoryStatus;
  private subscription: Subscription;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  trackProductsById(index: number, product: Product): number {
    return product.id;
  }

  deleteProduct(id: number): void {
    swal({
      title: 'Please Confirm',
      text: 'Are you sure you want to delete the selected product?',
      icon: 'warning',
      buttons: [true, true],
      dangerMode: true
    }).then(wantsToDelete => {
      if (wantsToDelete) {
        this.subscription = this.productService.deleteProduct(id).subscribe(_ => {
          this.getAllProducts();
        });
      }
    });
  }

  addNew(): void {
    this.router.navigate(['/products', 0]);
  }

  private getAllProducts(): void {
    this.products$ = this.productService.retrieveAllProducts();
  }

}
