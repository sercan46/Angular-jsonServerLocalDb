import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryFilterComponent } from './product-category-filter.component';

const routes: Routes = [{path:'',component:ProductCategoryFilterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryFilterlRoutingModule { }