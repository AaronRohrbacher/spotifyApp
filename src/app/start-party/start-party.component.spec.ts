import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPartyComponent } from './start-party.component';

describe('StartPartyComponent', () => {
  let component: StartPartyComponent;
  let fixture: ComponentFixture<StartPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
