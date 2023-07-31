import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAdminUpdateComponent } from './category-admin-update.component';

describe('CategoryAdminUpdateComponent', () => {
  let component: CategoryAdminUpdateComponent;
  let fixture: ComponentFixture<CategoryAdminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryAdminUpdateComponent]
    });
    fixture = TestBed.createComponent(CategoryAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
