import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewAssignmentComponent } from './teacher-view-assignment.component';

describe('TeacherViewAssignmentComponent', () => {
  let component: TeacherViewAssignmentComponent;
  let fixture: ComponentFixture<TeacherViewAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherViewAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
