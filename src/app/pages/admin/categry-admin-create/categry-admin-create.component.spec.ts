import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategryAdminCreateComponent } from './categry-admin-create.component';

describe('CategryAdminCreateComponent', () => {
  let component: CategryAdminCreateComponent;
  let fixture: ComponentFixture<CategryAdminCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategryAdminCreateComponent]
    });
    fixture = TestBed.createComponent(CategryAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
