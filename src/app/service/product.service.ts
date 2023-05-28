import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interface/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3000/product`);
  }

  deleteProduct(id: number): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/product/${id}`);
  }

  addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`http://localhost:3000/product`, product);
  }
  updateProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(
      `http://localhost:3000/product/${product.id}`,
      product
    );
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/product/${id}`);
  }
}
