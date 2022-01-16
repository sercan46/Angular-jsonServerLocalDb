import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../categorie/categorie.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-category-filter',
  templateUrl: './product-category-filter.component.html',
  styleUrls: ['./product-category-filter.component.css']
})
export class ProductCategoryFilterComponent implements OnInit {

  constructor(private route:ActivatedRoute,private categoryService:CategorieService,private productService:ProductService) { }
  id;
  products:ProductModel[];
  categorie:CategoryModel;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('categoryId');
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().then((resp)=>{
      this.categorie=resp.find(x=>x.id==this.id);
      console.log("aa",this.categorie)
      this.getProductService();
    }).catch((err)=>{
      console.error(err);
    })
  }

  getProductService(){
    this.productService.getProducts().then(resp=>{
      this.products=resp.filter(x=>x.categoryName==this.categorie.name);
    }).catch((err)=>{
      console.error(err);
    })
  }
}
