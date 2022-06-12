import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForComponent } from './product-for.component';

describe('ProductForComponent', () => {
  let component: ProductForComponent;
  let fixture: ComponentFixture<ProductForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
