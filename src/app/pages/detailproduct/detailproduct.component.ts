import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from 'src/app/data/product';


@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent  implements OnInit{
  products :any;
  id : string | undefined ;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
      const product = products.find(p=>p.id === this.id)
      console.log(product);
      this.products = product
    });
  }
}