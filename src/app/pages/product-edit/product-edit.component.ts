import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product: Iproduct = {
    name: "",
    price: 0
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {

    
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      })
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(data => {
      console.log(data)
    })
  }
}
