import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }
  searchText:String;
  products:ProductModel[];
  basketItems =[];

  ngOnInit() {
    this.getProductService();
    this.basketItems= JSON.parse(localStorage.getItem('basketProduct'));

  }

  getProductService(){
    this.productService.getProducts().then(resp=>{
      this.products=resp;
    })
  }

  openNewProd(){
    this.router.navigate(['products/create'])
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).then((resp)=>{
      this.getProductService();
    }).catch((err)=>{
      console.error(err);
      alert('Bir hata ile karşılaşıldı tekrar deneyiniz !');
    });
  }

  addBasket(product:ProductModel){
    let isHaveId=this.basketItems.findIndex(x=>x.id==product.id);
    if(isHaveId==-1){
      this.basketItems.push(product);
      localStorage.setItem('basketProduct',JSON.stringify(this.basketItems));
    }
    else{
      alert(`Daha önceden ${product.name} isimli ürünü sepete eklediniz !`)
    }
   }
   
   openProductDetail(productId){
    this.router.navigate([`products/${productId}`]);
   }
   openUpdateProduct(id){
    this.router.navigate([`products/update/${id}`]);
   }
}
