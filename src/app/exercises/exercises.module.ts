import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Exercise1Module} from "./exercise1/exercise1.module";
import {RouterModule} from "@angular/router";
import {Exercise1Component} from "./exercise1/exercise1.component";
import {Exercise2Component} from "./exercise2/exercise2.component";
import {Exercise3Component} from "./exercise3/exercise3.component";
import {Exercise4Component} from "./exercise4/exercise4.component";
import {ExerciseNotFoundComponent} from "./exerciseNotFound/exerciseNotFound.component";
import {Exercise4Module} from "./exercise4/exercise4.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Exercise1Module,
    Exercise4Module,
    RouterModule.forChild([{
      path: '1',
      component: Exercise1Component,
    },{
      path: '2',
      component: Exercise2Component,
    },{
      path: '3',
      component: Exercise3Component,
    },{
      path: '4',
      component: Exercise4Component,
    }, {
      path: '**',
      component: ExerciseNotFoundComponent
    }])
  ]
})
export class ExercisesModule { }
