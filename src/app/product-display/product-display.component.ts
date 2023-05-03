import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { product } from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  products: product[] = [];

  objectKeys(objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys); 
    return keys;
 }

constructor(private ProductService: ProductService) {}
  getProducts(): void{
    this.ProductService.getProducts()
    .subscribe({next: (products: product[]) => this.products = products});
  };
  
  ngOnInit() {
    this.objectKeys(this.getProducts());
  }

 

}
