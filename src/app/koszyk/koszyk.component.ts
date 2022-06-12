import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketItem } from '../models/BasketItem';
import { Product } from '../models/Product';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {

  @Input() koszyk: BasketItem[] = [];
  wyswietlac: boolean = false;

  constructor() { }

  iloscArtykulow(): number {
    var ilosc = 0;
    for (var i = 0; i < this.koszyk.length; i++) {
      ilosc += this.koszyk[i].count;
    }
    return ilosc;

  }
  sumaKoszyk(): number {
    var suma = 0;
    for (var i = 0; i < this.koszyk.length; i++) {
      suma += (this.koszyk[i].price * this.koszyk[i].count);
    }
    return suma;
  }
  ngOnInit(): void {}

  @Output('onClickClear') onClickClear: EventEmitter<Product> = new EventEmitter<Product>();
  @Output('onMoreClick') onMore: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output('onLessClick') onLess: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output('onDeleteClick') onDelete: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();

  ShowBasketClick(): void {
    this.wyswietlac =! this.wyswietlac;
  }
  onMoreClick(x: BasketItem): void {
    x.count+=1;
    this.onMore.emit(x);
  }
  onLessClick(x: BasketItem): void {
    x.count -= 1
    this.onLess.emit(x);
  }
  onDeleteClick(x: BasketItem): void {
    this.onDelete.emit(x);
  }

  ClearClick(): void {
    this.onClickClear.emit();
  }

}
