import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModifyMainComponent } from './product-modify-main.component';

describe('ProductModifyMainComponent', () => {
  let component: ProductModifyMainComponent;
  let fixture: ComponentFixture<ProductModifyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductModifyMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductModifyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
