import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaillComponent } from './product-detaill.component';

describe('ProductDetaillComponent', () => {
  let component: ProductDetaillComponent;
  let fixture: ComponentFixture<ProductDetaillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetaillComponent]
    });
    fixture = TestBed.createComponent(ProductDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
