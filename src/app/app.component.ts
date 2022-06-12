import { Component } from '@angular/core';
import { BasketService } from './BasketService/basket.service';
import { BasketItem } from './models/BasketItem';
import { Product } from './models/Product';
import { ProductsService } from './ProductService/products.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'KokotLab2Taib';

  produkty: Product[];

  

  constructor(
   ) {
    
  }

 
}
