import { Component } from '@angular/core';

import { Product } from 'src/app/common/product';
import products from 'src/app/data/product';

@Component({
  selector: 'app-home-linh',
  templateUrl: './home-linh.component.html',
  styleUrls: ['./home-linh.component.css']
})
export class HomeLinhComponent {
  products = products;
  p: number = 1
  product : Product[] | undefined
  search : any;
  onSubmit() {
    const p = products.filter(p=>  p.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(this.search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())) 
    this.product = p
  }
}
