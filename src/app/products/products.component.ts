import { Component } from '@angular/core';
import { Iproduct } from '../interface/products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    products : Iproduct[] =[];
    constructor(private productService: ProductService) {
      this.productService.getProducts().subscribe(
        (data) => {
          this.products = data;
        },
        (error) => console.log(error.message)
      );
    }
    removeItem(id:any){
      this.productService.deleteProduct(id).subscribe(()=>{
        this.products = this.products.filter(item => item.id != id)
      })
    }
}
