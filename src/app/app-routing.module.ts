import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDisplayComponent } from './product/product-display/product-display.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductModifyMainComponent } from './product/product-modify-main/product-modify-main.component';
import { UserTableViewComponent } from './user-table-view/user-table-view.component';
import { ProductLandingPageComponent } from './product/product-landing-page/product-landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProductLandingPageComponent },
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
