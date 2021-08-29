import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardListComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardListComponent
  ]
})
export class CardManagementModule { }
