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
  deleteProductForm() {}
  updateProductForm() {}

  goAddProduct(product: product): void {
    this.ProductService.addProduct(product).subscribe((product) => {
      this.products.push(product);
    });
    this.log = 'Objeto ' + product.id + ' Añadido';
  }

  goUpdateProduct(product: product): void {
    this.ProductService.updateProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }

  goDeleteProduct(id: number): void {
    const exists = this.products.some((p) => p.id == id);
    if (id > 100 && exists) {
      const index = this.products.findIndex((p) => p.id === id);
      this.products.splice(index, 1);
      this.log =
        'Objeto ' + id + ' borrado a ' + new Date().toISOString().slice(11, -5);
      return;
    }

    this.ProductService.deleteProduct(id).subscribe((product) => {
      product.isDeleted = true;
      const index = this.products.findIndex((p) => p.id === product.id);
      if (index >= 0) {
        this.products.splice(index, 1);
        this.log = 'Objeto ' + id + ' borrado a ' + product.deletedOn;
      } else {
        this.log = 'Objeto ' + id + ' no encontrado o ya ha sido borrado';
      }
    });
  }

  anadeObjeto(idP: number) {
    if (idP <= 0) {
      return;
    }
    const exists = this.products.some((p) => p.id == idP);

    if (exists) {
      this.log = `Producto con id ${idP} ya existe`;
    } else if (!exists && idP <= 100) {
      let product1 = {
        id: idP,
        title: idP.toString(),
        category: 'Category 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug',
        price: 100,
        discountPercentage: 9.52,
        rating: 0,
        stock: 100,
        brand: 'Brand 1',
        thumbnail: 'https://via.placeholder.com/150',
        images: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
      };

      this.goUpdateProduct(product1);
      this.log = `Objeto ${idP} Actualizado`;
    } else {
      let product1 = {
        id: idP,
        title: 'Product 1',
        category: 'Category 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fug',
        price: 100,
        discountPercentage: 9.52,
        rating: 0,
        stock: 100,
        brand: 'Brand 1',
        thumbnail: 'https://via.placeholder.com/150',
        images: [
          'https://via.placeholder.com/150',
          'https://via.placeholder.com/150',
        ],
      };
      this.log = `Objeto ${idP} Añadido`;
    }
  }
}
