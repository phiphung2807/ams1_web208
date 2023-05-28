import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductDetaillComponent } from './pages/product-detaill/product-detaill.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetaillComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
