import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../../services/product-service/product.service';
import { product } from '../../model/product';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.scss'],
})
export class ProductModifyComponent extends ProductDisplayComponent {
  product?: product;
  formProduct?: product;
  success?: boolean;
  @Input() isUpdate: boolean;

  productFromId(id: number | undefined) {
    if (id == undefined) {
      return;
    }
    if (id > 100) {
      this.product?.id ?? 101;
      return;
    }
    this.ProductService.getProduct(id).subscribe((data) => {
      data ? (this.product = data) : (this.product = undefined);
    });
    console.log(this.product);
  }

  goUpdateProduct(product: product): void {
    this.success = undefined;
    this.ProductService.updateProduct(product!).subscribe({
      next: (product) => {
        this.products.push(product);
      },
      error: (err) => {
        console.error(err);
        console.log('Se actualizo el producto');
        this.success = false;
      },
      complete: () => {
        console.log('Se actualizo el producto');
        this.success = true;
      },
    });
  }

  anadeObjeto(idP: number) {
    if(this.success != undefined){
      this.success=false;
      return;
    }

    this.success = undefined;
    this.goAddProduct(this.product!);

    return;
  }

  goAddProduct(product: product): void {
    this.ProductService.addProduct(product).subscribe({
      next: (product) => {
        this.products.push(product);
        this.success = true;
      },
      error: (err) => {
        console.error('No se puedo añadir el producto', err),
          (this.success = true);
      },
      complete: () => console.log('Se añadio el producto'),
    });
  }
}
