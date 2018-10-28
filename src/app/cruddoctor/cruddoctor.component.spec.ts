import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruddoctorComponent } from './cruddoctor.component';

describe('CruddoctorComponent', () => {
  let component: CruddoctorComponent;
  let fixture: ComponentFixture<CruddoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruddoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruddoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
