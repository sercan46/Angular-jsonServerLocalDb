import { Component, OnInit } from '@angular/core';
import { CategorieService } from './categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private categoryService:CategorieService) { }

  categories:CategoryModel[];
  ngOnInit() {
    this.getProductService();
  }

  getProductService(){
    this.categoryService.getCategories().then(resp=>{
      this.categories=resp;
      console.log(this.categories)
    }).catch((err)=>{
      console.error(err);
      alert('Bir hata ile karşılaşıldı tekrar deneyiniz !');
    });
  }

}
