import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedData } from '../models/PaginatedData';
import { Pagination } from '../models/Paginations';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  get(pagination?: Pagination): Observable<PaginatedData<Product>> {
    if (pagination == null) {
      pagination = new Pagination("name", 1, 10, false);
    }
    return this.httpClient.get<PaginatedData<Product>>('http://localhost:12124/Products?' +
      'page=' + pagination.page +
      '&rowsPerPage=' + pagination.rowsPerPage +
      '&sortAscending=' + pagination.sortAscending +
      '&sortColumn=' + pagination.sortColumn);
  }

  getById(productId: number):Observable<Product>{
    return this.httpClient.get<Product>('http://localhost:12124/Products?' + productId);
  }
}
