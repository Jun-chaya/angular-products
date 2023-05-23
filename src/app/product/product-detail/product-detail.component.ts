import { Component } from '@angular/core';
import { allProduct, product } from '../../model/product';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DarkModeService } from 'src/app/services/dark-mode/dark-mode.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: product | undefined;
  numImages: number | undefined;
  myTheme: string;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private location: Location,
    private DarkModeService: DarkModeService
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.numImages = this.product?.images.length;
    

    if (
      this.DarkModeService.getTheme().subscribe(
        (theme) => (this.myTheme = theme)
      )
    ) {
      this.DarkModeService.setTheme('dark');
  
      this.DarkModeService.getTheme().subscribe(
        (data) => (this.myTheme = data)
      );
    } else {
      this.DarkModeService.setTheme('light');
  
      this.DarkModeService.getTheme().subscribe(
        (data) => (this.myTheme = data)
      );
    }
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ProductService.getProduct(id).subscribe(
      (product) => (this.product = product)
    );
  }
  aplicaDescuento(product: product): number {
    var n1 = product.price * ((100 - product.discountPercentage) / 100);
    return Math.floor(n1 * 100) / 100;
  }

 
 
}
