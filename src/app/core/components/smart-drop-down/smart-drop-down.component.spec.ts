import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDropDownComponent } from './smart-drop-down.component';

describe('SmartDropDownComponent', () => {
  let component: SmartDropDownComponent;
  let fixture: ComponentFixture<SmartDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
