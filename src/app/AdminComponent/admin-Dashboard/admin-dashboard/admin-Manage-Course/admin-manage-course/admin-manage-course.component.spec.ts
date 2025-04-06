import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageCourseComponent } from './admin-manage-course.component';

describe('AdminManageCourseComponent', () => {
  let component: AdminManageCourseComponent;
  let fixture: ComponentFixture<AdminManageCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminManageCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
