import { TestBed, inject } from '@angular/core/testing';

import { CartresolverService } from './cartresolver.service';

describe('CartresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartresolverService]
    });
  });

  it('should be created', inject([CartresolverService], (service: CartresolverService) => {
    expect(service).toBeTruthy();
  }));
});
