import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModify3Component } from './product-modify3.component';

describe('ProductModify3Component', () => {
  let component: ProductModify3Component;
  let fixture: ComponentFixture<ProductModify3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductModify3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductModify3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
