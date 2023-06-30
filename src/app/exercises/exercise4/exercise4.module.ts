import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Exercise4Component} from './exercise4.component';
import {ProductListComponent} from "./product-list.component";
import {ProductComponent} from "./product.component";


@NgModule({
  declarations: [
    Exercise4Component,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class Exercise4Module { }
