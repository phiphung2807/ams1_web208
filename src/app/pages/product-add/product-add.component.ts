import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: Iproduct = {
    id: 0,
    name: "",
    price: 0
  }
  constructor(private productService: ProductService) {

  }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data)
    })
  }
}
