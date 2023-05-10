import { Component } from '@angular/core';
import { allProduct, product } from '../product';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product: product | undefined;
  numImages: number | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.numImages = this.product?.images.length;
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ProductService.getProduct(id).subscribe(
      (product) => (this.product = product)
    );
  }
}
