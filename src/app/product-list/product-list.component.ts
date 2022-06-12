import { Component, OnInit } from '@angular/core';
import { BasketService } from '../BasketService/basket.service';
import { BasketItem } from '../models/BasketItem';
import { Pagination } from '../models/Paginations';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
page:number=0; //
rowsPerPage:number=5; //
  produkty: Product[];
  koszyk: BasketItem[] = [];
  constructor(private productsService: ProductsService, private basketService: BasketService) {
    this.refresh(); //
   }

  
  BtnAddClick(x: Product): void {
    this.basketService.post(x.id, 1).subscribe(response => this.koszyk= response);
  }
  ClearClick(): void {
    this.basketService.clear().subscribe(response => this.koszyk = response);
  }
  
  MoreClick(x: BasketItem): void {
    this.basketService.put(x.id, x.count).subscribe(response => this.koszyk = response);
  }
  LessClick(x: BasketItem): void {
    this.basketService.put(x.id, x.count).subscribe(response => this.koszyk = response);
  }
  DeleteClick(x: BasketItem): void {
    this.basketService.delete(x.id).subscribe(response => this.koszyk = response);
  }
  //
  refresh():void{
    let pagination = new Pagination("name", 1, 10, false);
    pagination.page= this.page;
    pagination.rowsPerPage= this.rowsPerPage;
    pagination.sortAscending=true;
    pagination.sortColumn='name';
    this.productsService.get(pagination).subscribe(response => this.produkty = response.data)
  }

}
