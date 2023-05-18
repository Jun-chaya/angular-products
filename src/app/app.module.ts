import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductService } from './services/product-service/product.service';
import { ProductSearchComponent } from './product-search/product-search.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductModify3Component } from './product-modify3/product-modify3.component';
import { ProductModifyMainComponent } from './product-modify-main/product-modify-main.component';
import { UserTableViewComponent } from './user-table-view/user-table-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductSearchComponent,
    ProductModifyComponent,
    ProductDetailComponent,
    ProductModify3Component,
    ProductModifyMainComponent,
    UserTableViewComponent,
    
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
