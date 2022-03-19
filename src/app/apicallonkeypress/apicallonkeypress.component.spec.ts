import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApicallonkeypressComponent } from './apicallonkeypress.component';

describe('ApicallonkeypressComponent', () => {
  let component: ApicallonkeypressComponent;
  let fixture: ComponentFixture<ApicallonkeypressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApicallonkeypressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApicallonkeypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
