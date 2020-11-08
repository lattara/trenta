import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  selectedIndex = undefined;
  selectedCountryIndex = undefined;
  buttonLabel = 'Ajouter au panier';

  shoe = [
    {
      name: 'Nike SB Dunk High Pro - Truck-it',
      reference: 'BQ6826-003',
      price: 80,
      discount: 10,
    },
  ];
  indexes = ['1', '2', '3', '4', '5']
  countries = ['EU', 'US', 'UK', 'CM'];
  sizes = ['40', '41', '42', '42.5', '43', '44'];
  images = [1, 2, 3, 4, 5, 6].map(n => `/assets/images/img-chaussure-${n}.jpg`);

  constructor() {
  }

  ngOnInit(): void {
  }

  getDiscountedPrice(): number {
    const discount = ((this.shoe[0].discount / 100) * this.shoe[0].price).toFixed(2);
    // tslint:disable-next-line: radix
    return this.shoe[0].price - parseInt(discount);
  }

  selectSize(index): void {
    this.selectedIndex = index;
  }

  selectCountry(index): void {
    this.selectedCountryIndex = index;
  }

  addToCart(): void {
    this.buttonLabel = 'produit ajouté au panier';
  }

}
