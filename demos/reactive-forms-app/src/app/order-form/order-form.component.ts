import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DescriptionValidator } from '../description.validator';

export interface OrderDetail {
  productNumber: string;
  quantity: number;
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  showDescriptionHint: boolean;
  private descChangeSubscription: Subscription;

  orderForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.descChangeSubscription = this.description.valueChanges.subscribe(input => {
      this.showDescriptionHint = input.length < 10;
    });
  }

  ngOnDestroy(): void {
    this.descChangeSubscription?.unsubscribe();
  }

  private buildForm(): void {
    this.orderForm = this.fb.group({
      description: ['Default', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(25),
        DescriptionValidator.cannotContainMeanWords
      ]],
      orderDetails: this.fb.array([
        this.fb.group({
          productNumber: [''],
          quantity: [0]
        })
      ])
    });
  }

  get description(): AbstractControl {
    return this.orderForm.controls.description;
  }

  get orderDetails(): FormArray {
    return this.orderForm.controls.orderDetails as FormArray;
  }

  addLineItem(): void {
    this.orderDetails.push(new FormGroup({
      productNumber: new FormControl(''),
      quantity: new FormControl(0)
    }));
  }

  populateForm(): void {
    const populatedOrderDetails: OrderDetail[] = [];
    for (let counter = 0; counter < this.orderDetails.length; counter++) {
      populatedOrderDetails.push({ productNumber: `Product${counter + 1}`, quantity: (counter + 1) * 10 });
    }
    this.orderForm.setValue({
      description: 'Auto-populated',
      orderDetails: populatedOrderDetails
    });
  }

  resetOrderDetailQuantities(): void {
    const updatedQuantites: any[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let counter = 0; counter < this.orderDetails.length; counter++) {
      updatedQuantites.push({ quantity: 100 });
    }
    this.orderForm.patchValue({
      orderDetails: updatedQuantites
    });
  }

  submit(): void {
    console.log(this.orderForm.value);
  }

}
