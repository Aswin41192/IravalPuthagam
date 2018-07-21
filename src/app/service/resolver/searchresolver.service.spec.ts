import { TestBed, inject } from '@angular/core/testing';

import { SearchresolverService } from './searchresolver.service';

describe('SearchresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchresolverService]
    });
  });

  it('should be created', inject([SearchresolverService], (service: SearchresolverService) => {
    expect(service).toBeTruthy();
  }));
});
