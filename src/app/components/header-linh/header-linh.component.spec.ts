import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinhComponent } from './header-linh.component';

describe('HeaderLinhComponent', () => {
  let component: HeaderLinhComponent;
  let fixture: ComponentFixture<HeaderLinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderLinhComponent]
    });
    fixture = TestBed.createComponent(HeaderLinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
