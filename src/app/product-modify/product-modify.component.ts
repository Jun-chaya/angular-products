import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../product-service/product.service';
import { product } from '../model/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css'],
})
export class ProductModifyComponent extends ProductDisplayComponent {
  product?: product;
  formProduct?: product;

  productFromId(id: string | undefined) {
    if (id == undefined) {
      return;
    }
    let id2 = parseInt(id);
    this.ProductService.getProduct(id2).subscribe((data) => {
      data ? (this.product = data) : (this.product = undefined);
    });
    console.log(this.product);
  }

  addProductForm(formProduct: product): void {
    formProduct.id;
  }

  updateProductForm() {}

  goUpdateProduct(product: product): void {
    this.ProductService.updateProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }
}
