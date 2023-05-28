import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetaillComponent } from './pages/product-detaill/product-detaill.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    children:[
      { path: 'product', component:ProductsComponent  },
      { path: "product/add", component: ProductAddComponent },
      { path: "product/:id/edit", component: ProductEditComponent },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
