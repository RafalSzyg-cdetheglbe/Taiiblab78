import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductsService } from '../ProductService/products.service';

@Component({
  selector: 'app-product-for',
  templateUrl: './product-for.component.html',
  styleUrls: ['./product-for.component.css']
})
export class ProductForComponent implements OnInit {
product: Product;

  constructor(private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      this.productsService.getById(res['id'].subscribe(res2=>this.product=res2))
    });
    
  }

  onSubmit():void{
console.log(this.product);
  }
}
