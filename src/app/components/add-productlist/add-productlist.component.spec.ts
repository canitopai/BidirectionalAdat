import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductlistComponent } from './add-productlist.component';

describe('AddProductlistComponent', () => {
  let component: AddProductlistComponent;
  let fixture: ComponentFixture<AddProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
