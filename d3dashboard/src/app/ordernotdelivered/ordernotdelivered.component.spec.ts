import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernotdeliveredComponent } from './ordernotdelivered.component';

describe('OrdernotdeliveredComponent', () => {
  let component: OrdernotdeliveredComponent;
  let fixture: ComponentFixture<OrdernotdeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdernotdeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdernotdeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
