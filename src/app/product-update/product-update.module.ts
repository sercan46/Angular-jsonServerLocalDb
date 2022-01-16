import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductUpdateComponent } from './product-update.component';
import { ProductUpdateRoutingModule } from './product-update-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductUpdateComponent],
  imports: [
    CommonModule,
    ProductUpdateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductUpdateModule { }
