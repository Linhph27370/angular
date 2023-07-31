import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinhComponent } from './home-linh.component';

describe('HomeLinhComponent', () => {
  let component: HomeLinhComponent;
  let fixture: ComponentFixture<HomeLinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLinhComponent]
    });
    fixture = TestBed.createComponent(HomeLinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
