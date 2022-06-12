import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() data: Product;
  constructor() { }

  ngOnInit(): void {
  }

  @Output('onAddClick') onAddClick: EventEmitter<Product> = new EventEmitter<Product>();

  onDodajClick(): void {
    this.onAddClick.emit(this.data);
  }
}
