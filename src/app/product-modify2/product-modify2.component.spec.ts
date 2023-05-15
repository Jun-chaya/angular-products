import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModify2Component } from './product-modify2.component';

describe('ProductModify2Component', () => {
  let component: ProductModify2Component;
  let fixture: ComponentFixture<ProductModify2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModify2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductModify2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
