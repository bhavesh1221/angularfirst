import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingdataComponent } from './showingdata.component';

describe('ShowingdataComponent', () => {
  let component: ShowingdataComponent;
  let fixture: ComponentFixture<ShowingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
