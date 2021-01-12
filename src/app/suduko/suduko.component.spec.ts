import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SudukoComponent } from './suduko.component';

describe('SudukoComponent', () => {
  let component: SudukoComponent;
  let fixture: ComponentFixture<SudukoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudukoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudukoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
