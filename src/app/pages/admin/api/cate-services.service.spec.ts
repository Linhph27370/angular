import { TestBed } from '@angular/core/testing';

import { CateServicesService } from './cate-services.service';

describe('CateServicesService', () => {
  let service: CateServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
