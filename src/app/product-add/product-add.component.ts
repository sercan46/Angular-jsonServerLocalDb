import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from '../categorie/categorie.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  productForm: FormGroup;
  categories:CategoryModel[];
  constructor(public fb: FormBuilder,private productService:ProductService,private router:Router,private categoryService:CategorieService) {    
    /**
    * Product Model
    */
   this.productForm = fb.group({
     id:["", Validators.required],
     name: ["", Validators.required],
     description: ["", Validators.required],
     price: ["", Validators.required],
     categoryName: ["", Validators.required],
     photo: ["", Validators.required]
   })}
   sendProductModel:ProductModel;

  ngOnInit() {
    this.getCategories();
  }

  addProduct(){
      this.sendProductModel={
        id:this.productForm.get('id').value,
        name:this.productForm.get('name').value,
        description:this.productForm.get('description').value,
        price:this.productForm.get('price').value,
        categoryName:this.productForm.get('categoryName').value,
        photo:this.productForm.get('photo').value,
      };
    if(this.productForm.valid==true){
        this.productService.addProduct(this.sendProductModel).then(()=>{
          this.router.navigate(['products']);
          }
        ).catch(err=>{
          console.error(err);
          alert("Lütfen Ürün No'yu benzersiz giriniz!");
        })    
      }
      else{
        alert("Lütfen tüm alanları giriniz!");
      }
  }
  getCategories(){
    this.categoryService.getCategories().then((resp)=>{
      this.categories=resp;
    }).catch((err)=>{
      console.error(err);
    })
  }
}
