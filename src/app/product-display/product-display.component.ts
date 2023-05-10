import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { allProduct, product } from '../product';
import { RouterModule } from '@angular/router';
import { auditTime, timestamp } from 'rxjs';
import { ProductSearchComponent } from '../product-search/product-search.component';
@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
})
export class ProductDisplayComponent implements OnInit {
  id: number = 0;
  log: string = '';
  public products: product[] = [];
  public categories: string[] = [];

  constructor(protected ProductService: ProductService) {}

  goGetProducts(): void {
    this.ProductService.getAllProducts().subscribe(
      (allProducts) => (this.products = allProducts.products)
    );
    //.add(() => console.log(this.products));
  }

  goGetCategories(): void {
    this.ProductService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

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

  aplicaDescuento(product: product): number {
    //console.log(product);
    var n1 = product.price * ((100 - product.discountPercentage) / 100);
    return Math.floor(n1 * 100) / 100;
  }

  numberToStars(n: number): string {
    let stars = '';
    let decimals: number = n - Math.floor(n);

    for (let i = 1; i <= 5; i++) {
      if (i < n) {
        stars += '★';
      }
    }
    if (decimals >= 0.3 && decimals < 0.8) {
      stars += '⯨';
    } else if (n - Math.floor(n) >= 0.8) {
      stars += '★';
    } else {
      while (stars.length < 5) {
        stars += '☆';
      }
    }

    return stars;
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
  goGetProductCategory(category: string) {
    this.ProductService.productsByCategory(category).subscribe(
      (allProducts) => (this.products = allProducts.products)
    );
  }

  filterByPrice(priceMin: number, priceMax: number) {
    this.products = this.products.filter(
      (p) =>
        this.aplicaDescuento(p) <= priceMax &&
        this.aplicaDescuento(p) >= priceMin
    );
  }
  search(term: string) {
    let productSearch = new ProductSearchComponent(this.ProductService);
    productSearch.search(term).subscribe((allProducts) => (this.products = allProducts.products));
  }

  ngOnInit(): void {
    this.goGetProducts();
    this.goGetCategories();
    
  }
}
