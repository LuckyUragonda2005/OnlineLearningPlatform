import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewCourseComponent } from './teacher-view-course.component';

describe('TeacherViewCourseComponent', () => {
  let component: TeacherViewCourseComponent;
  let fixture: ComponentFixture<TeacherViewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherViewCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherViewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
