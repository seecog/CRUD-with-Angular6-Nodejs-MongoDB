import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcomponentsComponent } from './assetcomponents.component';

describe('AssetcomponentsComponent', () => {
  let component: AssetcomponentsComponent;
  let fixture: ComponentFixture<AssetcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
