import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthRecordsComponent } from './month-records.component';

describe('MonthRecordsComponent', () => {
  let component: MonthRecordsComponent;
  let fixture: ComponentFixture<MonthRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
