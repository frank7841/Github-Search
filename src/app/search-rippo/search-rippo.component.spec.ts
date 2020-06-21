import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRippoComponent } from './search-rippo.component';

describe('SearchRippoComponent', () => {
  let component: SearchRippoComponent;
  let fixture: ComponentFixture<SearchRippoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRippoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRippoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
