import { Component } from '@angular/core';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { product } from '../model/product';

@Component({
  selector: 'app-product-modify2',
  templateUrl: './product-modify2.component.html',
  styleUrls: ['./product-modify2.component.css'],
})
export class ProductModify2Component extends ProductDisplayComponent {
  product?: product;
  formProduct?: product;

  anadeObjeto(idP: number) {
    if (idP <= 0) {
      return;
    }
    const exists = this.products.some((p) => p.id == idP);

    if (exists) {
      this.log = `Producto con id ${idP} ya existe`;
    } else if (!exists && idP <= 100) {
      //this.goUpdateProduct(product1);
      this.log = `Objeto ${idP} Actualizado`;
    } else {
    }
    //this.goAddProduct(this.product);
    this.log = `Objeto ${idP} Añadido`;
  }

  goAddProduct(product: product): void {
    this.ProductService.addProduct(product).subscribe((product) => {
      this.products.push(product);
    });
    this.log = 'Objeto ' + product.id + ' Añadido';
  }
  
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
  updateProductForm() {
    let product1 = [
      {
        id: this.formProduct?.id,
        title: this.formProduct?.title,
        productDescription: this.formProduct?.description,
        price: this.formProduct?.price,
        discountPercentage: this.formProduct?.discountPercentage,
        rating: this.formProduct?.rating,
        stock: this.formProduct?.stock,
        brand: this.formProduct?.brand,
        category: this.formProduct?.category,
        thumbnail: this.formProduct?.thumbnail,
        images: this.formProduct?.images,
      },
    ];
    console.log(product1);
  }
}
