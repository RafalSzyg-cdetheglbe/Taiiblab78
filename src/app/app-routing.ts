import { Routes } from "@angular/router";
import { BasektListComponent } from "./basekt-list/basekt-list.component";
import { ProductForComponent } from "./product-for/product-for.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { UserListComponent } from "./user-list/user-list.component";

export const APP_ROUTES: Routes=[
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductForComponent},
    {path: 'basket', component: BasektListComponent},
    {path: 'users', component: UserListComponent},
    {path: '', redirectTo:'products', pathMatch:'full'},
];