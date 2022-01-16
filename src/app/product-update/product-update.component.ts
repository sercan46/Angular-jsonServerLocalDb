import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../categorie/categorie.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
 
  constructor(public fb: FormBuilder,private productService:ProductService,private router:Router,private categoryService:CategorieService,private route: ActivatedRoute) {    
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
   })};

   productForm: FormGroup;
   categories:CategoryModel[];
   sendProductModel:ProductModel;
   id;
   product:ProductModel;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productId');
    this.getProductService();
    this.getCategories();
  }
  updateProduct(){
       this.sendProductModel={
            id:this.productForm.get('id').value,
            name:this.productForm.get('name').value,
            description:this.productForm.get('description').value,
            price:this.productForm.get('price').value,
            categoryName:this.productForm.get('categoryName').value,
            photo:this.productForm.get('photo').value,
          };
          console.log(this.sendProductModel)
        if(this.productForm.valid==true){
            this.productService.updateProduct(this.sendProductModel.id,this.sendProductModel).then(()=>{
              this.router.navigate(['products']);
              }
            ).catch(err=>{
              alert("Lütfen Ürün No'yu benzersiz giriniz!");
            })    
          }
          else{
            alert("Lütfen tüm alanları giriniz!");
          }
  }
  // addProduct(){
  //     this.sendProductModel={
  //       id:this.productForm.get('id').value,
  //       name:this.productForm.get('name').value,
  //       description:this.productForm.get('description').value,
  //       price:this.productForm.get('price').value,
  //       categoryName:this.productForm.get('categoryName').value,
  //       photo:this.productForm.get('photo').value,
  //     };
  //     console.log(this.sendProductModel)
  //   if(this.productForm.valid==true){
  //       this.productService.addProduct(this.sendProductModel).then(()=>{
  //         this.router.navigate(['products']);
  //         }
  //       ).catch(err=>{
  //         alert("Lütfen Ürün No'yu benzersiz giriniz!");
  //       })    
  //     }
  //     else{
  //       alert("Lütfen tüm alanları giriniz!");
  //     }
  // }
  getCategories(){
    this.categoryService.getCategories().then((resp)=>{
      this.categories=resp;
    }).catch((err)=>{
      console.error(err);
    })
  }
  getProductService(){
    this.productService.getProducts().then(resp=>{
      this.product=resp.find(x=>x.id==this.id);
      this.productForm.patchValue({
        id:this.product.id,
        name:this.product.name,
        description:this.product.description,
        price:this.product.price,
        categoryName:this.product.categoryName,
        photo:this.product.photo
      })
      console.log(this.product)
    })
  }
}
