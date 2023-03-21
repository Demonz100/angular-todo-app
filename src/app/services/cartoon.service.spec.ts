import { TestBed } from '@angular/core/testing';

import { CartoonService } from './cartoon.service';

describe('CartoonService', () => {
  let service: CartoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
