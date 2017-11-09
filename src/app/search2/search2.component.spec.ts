import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent2 } from './search.component';

xdescribe('SearchComponent', () => {
  let component: SearchComponent2;
  let fixture: ComponentFixture<SearchComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
