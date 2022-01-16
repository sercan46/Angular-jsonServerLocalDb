import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private productService:ProductService) { }

  id;
  product:ProductModel;
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('productId');
    this.getProductService();
  }
 getProductService(){
    this.productService.getProducts().then(resp=>{
      this.product=resp.find(x=>x.id==this.id);
    }).catch((err)=>{
      console.error(err);
    })
  }
}
