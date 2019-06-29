import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingcustComponent } from './existingcust.component';

describe('ExistingcustComponent', () => {
  let component: ExistingcustComponent;
  let fixture: ComponentFixture<ExistingcustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingcustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingcustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
