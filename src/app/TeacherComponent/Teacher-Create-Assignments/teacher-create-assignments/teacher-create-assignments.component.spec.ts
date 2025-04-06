import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateAssignmentsComponent } from './teacher-create-assignments.component';

describe('TeacherCreateAssignmentsComponent', () => {
  let component: TeacherCreateAssignmentsComponent;
  let fixture: ComponentFixture<TeacherCreateAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherCreateAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherCreateAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
