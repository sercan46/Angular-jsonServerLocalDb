import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor() { }
  basketProducts:ProductModel[];
  ngOnInit() {
   this.basketProducts= JSON.parse(localStorage.getItem('basketProduct'));
  }

  deleteBasket(productId){
    this.basketProducts=this.basketProducts.filter(x=>x.id!==productId);
    localStorage.setItem('basketProduct',JSON.stringify(this.basketProducts));
  }
  
}
