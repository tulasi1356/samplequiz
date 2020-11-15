import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsmainComponent } from './osmain.component';

describe('OsmainComponent', () => {
  let component: OsmainComponent;
  let fixture: ComponentFixture<OsmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
