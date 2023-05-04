import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { allProduct,product} from '../product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  
  products: product[] = [];

  constructor(private ProductService: ProductService) {}

  goGetProducts(): void {
    this.ProductService.getAllProducts()
    .subscribe(Allproducts => this.products = Allproducts.products)
    .add(() => console.log(this.products));
    }


  
  ngOnInit() {
    this.goGetProducts();  
    
  }

  
}
