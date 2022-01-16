import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryFilterComponent } from './product-category-filter.component';
import { ProductCategoryFilterlRoutingModule } from './product-category-filter-routing.module';



@NgModule({
  declarations: [ProductCategoryFilterComponent],
  imports: [
    CommonModule,
    ProductCategoryFilterlRoutingModule
  ]
})
export class ProductCategoryFilterModule { }
