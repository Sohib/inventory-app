import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  constructor() {
    this.products = [
      new Product({
        sku: 'MYSHOES',
        name: 'Black Running Shoes',
        imageUrl: '/assets/images/products/black-shoes.jpg',
        department: ['Men', 'Shoes', 'Running Shoes'],
        price: 109.99
      }),
      new Product({
        sku: 'NEATOJACKET',
        name: 'Blue Jacket',
        imageUrl: '/assets/images/products/blue-jacket.jpg',
        department: ['Women', 'Apparel', 'Jackets & Vests'],
        price: 238.99
      }),
      new Product({
        sku: 'NICEHAT',
        name: 'A Nice Black Hat',
        imageUrl: '/assets/images/products/black-hat.jpg',
        department: ['Men', 'Accessories', 'Hats'],
        price: 29.99
      })
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product Clicked', product);
  }

}
