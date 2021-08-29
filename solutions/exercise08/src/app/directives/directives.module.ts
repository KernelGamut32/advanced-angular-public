import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadWordsDirective } from './bad-words.directive';
import { UserRoleDirective } from './user-role.directive';

@NgModule({
  declarations: [BadWordsDirective, UserRoleDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BadWordsDirective,
    UserRoleDirective
  ]
})
export class DirectivesModule { }
