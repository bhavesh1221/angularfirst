import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesassignmentComponent } from './directivesassignment.component';

describe('DirectivesassignmentComponent', () => {
  let component: DirectivesassignmentComponent;
  let fixture: ComponentFixture<DirectivesassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesassignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
