import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  productForm: FormGroup;
  catalogNumber: FormControl;
  description: FormControl;
  unitCost: FormControl;
  quantityInStock: FormControl;

  private routeSubscription: Subscription;
  private commitSubscription: Subscription;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.buildForm();
    this.populateForm();
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.commitSubscription?.unsubscribe();
  }

  commitChanges(): void {
    if (this.productForm.controls.id.value === 0) {
      const payload = {
        catalogNumber: this.catalogNumber.value,
        description: this.description.value,
        unitCost: this.unitCost.value,
        quantityInStock: this.quantityInStock.value
      } as Product;
      this.commitSubscription = this.productService.createProduct(payload).subscribe(_ => {
        this.navigateToListView();
      });
    } else {
      this.commitSubscription = this.productService.editProduct(this.productForm.value).subscribe(_ => {
        this.navigateToListView();
      });
    }
  }

  cancel(): void {
    this.navigateToListView();
  }

  private buildForm(): void {
    this.productForm = this.fb.group({
      id: [0],
      catalogNumber: ['', [Validators.required]],
      description: [''],
      unitCost: [0, [Validators.required, Validators.min(1)]],
      quantityInStock: [0, [Validators.required]]
    });
    this.catalogNumber = this.productForm.controls.catalogNumber as FormControl;
    this.description = this.productForm.controls.description as FormControl;
    this.unitCost = this.productForm.controls.unitCost as FormControl;
    this.quantityInStock = this.productForm.controls.quantityInStock as FormControl;
  }

  private populateForm(): void {
    this.routeSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = +params.get('id');
        if (id > 0) {
          return this.productService.retrieveProductById(id);
        } else {
          return of({ id: 0, catalogNumber: '', description: '', unitCost: 0, quantityInStock: 0 } as Product);
        }
      }),
      map((product: Product) => this.productForm.setValue({
        id: product.id,
        catalogNumber: product.catalogNumber,
        description: product.description,
        unitCost: product.unitCost,
        quantityInStock: product.quantityInStock
      }))
    ).subscribe();
  }

  private navigateToListView(): void {
    this.router.navigate(['/']);
  }

}
