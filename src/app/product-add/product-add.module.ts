import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { ProductAddRoutingModule } from './product-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductAddComponent],
  imports: [
    CommonModule,
    ProductAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProductAddModule { }
