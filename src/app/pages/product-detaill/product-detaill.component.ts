import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detaill',
  templateUrl: './product-detaill.component.html',
  styleUrls: ['./product-detaill.component.scss']
})
export class ProductDetaillComponent {
  product: Iproduct = {
    name: '',
    price: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
      });
    });
  }
}
