
import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from 'src/app/data/product';
@Component({
  selector: 'app-detail-linh',
  templateUrl: './detail-linh.component.html',
  styleUrls: ['./detail-linh.component.css']
})
export class DetailLinhComponent implements OnInit {
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
