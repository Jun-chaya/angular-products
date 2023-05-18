import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModifyMainComponent } from './product-modify-main/product-modify-main.component';
import { UserTableViewComponent } from './user-table-view/user-table-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'search', component: ProductSearchComponent },
  { path: 'products', component: ProductDisplayComponent },
  { path: 'products/id/:id', component: ProductDetailComponent },
  { path: 'modify', component: ProductModifyMainComponent },
  { path: 'products/:page', component: ProductDisplayComponent },
  { path: 'users', component: UserTableViewComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
