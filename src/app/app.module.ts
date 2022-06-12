import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { BasektListComponent } from './basekt-list/basekt-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing';
import { FormsModule } from '@angular/forms';
import { ProductForComponent } from './product-for/product-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    KoszykComponent,
    ProductListComponent,
    BasektListComponent,
    UserListComponent,
    ProductForComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES), //
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
