import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCategoryListComponent } from './test-category-list.component';

describe('TestCategoryListComponent', () => {
  let component: TestCategoryListComponent;
  let fixture: ComponentFixture<TestCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCategoryListComponent]
    });
    fixture = TestBed.createComponent(TestCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
