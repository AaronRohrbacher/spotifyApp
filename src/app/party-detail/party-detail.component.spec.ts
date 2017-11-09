import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailComponent } from './party-detail.component';

describe('PartyDetailComponent', () => {
  let component: PartyDetailComponent;
  let fixture: ComponentFixture<PartyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
