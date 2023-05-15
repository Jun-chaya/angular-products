import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductService } from './product-service/product.service';
import { ProductSearchComponent } from './product-search/product-search.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModify2Component } from './product-modify2/product-modify2.component';
import { ProductModify3Component } from './product-modify3/product-modify3.component';
import { ProductModifyMainComponent } from './product-modify-main/product-modify-main.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserSearchComponent } from './user-search/user-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductSearchComponent,
    ProductModifyComponent,
    ProductDetailComponent,
    ProductModify2Component,
    ProductModify3Component,
    ProductModifyMainComponent,
    UserTableComponent,
    UserSearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
