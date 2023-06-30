import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise1Component } from './exercise1.component';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Exercise1Component
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise1Component
    }])
  ]
})
export class Exercise1Module { }
