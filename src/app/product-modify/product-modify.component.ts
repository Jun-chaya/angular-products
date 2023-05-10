import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../product.service';
import { product } from '../product';
@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css'],
})
export class ProductModifyComponent extends ProductDisplayComponent {
  product?: product;

  productFromId(id: string | undefined) {
    if (id== undefined){
      return;
    }
   let id2 = parseInt(id);
    this.ProductService.getProduct(id2).subscribe((data) => {
      data ? (this.product = data) : (this.product = undefined);
      
    });
    console.log(this.product);
  }

addProductForm(){}
deleteProductForm(){}
updateProductForm(){}




  // anadeObjeto(idP: number) {
  //   if (idP <= 0) {
  //     return;
  //   }
  //   const exists = this.products.some((p) => p.id == idP);

  //   if (exists) {
  //     this.log = `Producto con id ${idP} ya existe`;
  //   } else if (!exists && idP <= 100) {
  //     let product1 = {
  //       id: idP,
  //       title: idP.toString(),
  //       category: 'Category 1',
  //       description:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug',
  //       price: 100,
  //       discountPercentage: 9.52,
  //       rating: 0,
  //       stock: 100,
  //       brand: 'Brand 1',
  //       thumbnail: 'https://via.placeholder.com/150',
  //       images: [
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //       ],
  //     };

  //     this.goUpdateProduct(product1);
  //     this.log = `Objeto ${idP} Actualizado`;
  //   } else {
  //     let product1 = {
  //       id: idP,
  //       title: 'Product 1',
  //       category: 'Category 1',
  //       description:
  //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug',
  //       price: 100,
  //       discountPercentage: 9.52,
  //       rating: 0,
  //       stock: 100,
  //       brand: 'Brand 1',
  //       thumbnail: 'https://via.placeholder.com/150',
  //       images: [
  //         'https://via.placeholder.com/150',
  //         'https://via.placeholder.com/150',
  //       ],
  //     };

  //     this.goAddProduct(product1);
  //   }
  //TODO }
}
