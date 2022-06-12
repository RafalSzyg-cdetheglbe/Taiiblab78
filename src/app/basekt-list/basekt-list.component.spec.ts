import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasektListComponent } from './basekt-list.component';

describe('BasektListComponent', () => {
  let component: BasektListComponent;
  let fixture: ComponentFixture<BasektListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasektListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasektListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
