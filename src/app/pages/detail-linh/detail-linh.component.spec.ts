import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLinhComponent } from './detail-linh.component';

describe('DetailLinhComponent', () => {
  let component: DetailLinhComponent;
  let fixture: ComponentFixture<DetailLinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailLinhComponent]
    });
    fixture = TestBed.createComponent(DetailLinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
