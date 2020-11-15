import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputermainComponent } from './computermain.component';

describe('ComputermainComponent', () => {
  let component: ComputermainComponent;
  let fixture: ComponentFixture<ComputermainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputermainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
