import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import { allProduct, product } from '../../model/product';
import { ProductDisplayComponent } from '../product-display/product-display.component';

@Component({
  selector: 'app-product-modify3',
  templateUrl: './product-modify3.component.html',
  styleUrls: ['./product-modify3.component.css'],
})
export class ProductModify3Component extends ProductDisplayComponent {
  product: product | undefined;
  success?: boolean;

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

  goDeleteProduct(id?: number): void {
    this.success= undefined;
    if (id == undefined) {
      return;
    }
    const exists = this.totalProducts.some((p) => p.id == id);

    if (id < 100 && exists) {
      const index = this.totalProducts.findIndex((p) => p.id === id);
      this.totalProducts.splice(index, 1);
      this.success= true;
      console.log(
        'Objeto ' + id + ' borrado a ' + new Date().toISOString().slice(11, -5));
      return;
      
    }

    this.ProductService.deleteProduct(id).subscribe((product) => {

      product.isDeleted = true;
      
      const index = this.totalProducts.findIndex((p) => p.id === product.id);
      if (index >= 0) {
        this.totalProducts.splice(index, 1);
        console.log( 'Objeto ' + id + ' borrado a ' + product.deletedOn);
        this.success= true;
        
      } else {
        console.log( 'Objeto ' + id + ' no encontrado o ya ha sido borrado');
        this.success= false;
      
      }
    });
  }
}
