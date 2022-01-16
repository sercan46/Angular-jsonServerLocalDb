import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
      {path: '', redirectTo: '/products', pathMatch: 'full'},
      {path:'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
      {path:'categories', loadChildren: () => import('./categorie/categorie.module').then(m => m.CategorieModule)},
      {path:'products/create', loadChildren: () => import('./product-add/product-add.module').then(m => m.ProductAddModule)},
      {path:'basket', loadChildren: () => import('./basket/basket.module').then(m => m.BasketModule)},
      {path:'products/update/:productId', loadChildren: () => import('./product-update/product-update.module').then(m => m.ProductUpdateModule)},
      {path:'products/:productId', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)},
      {path:'categories/:categoryId', loadChildren: () => import('./product-category-filter/product-category-filter.module').then(m => m.ProductCategoryFilterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
