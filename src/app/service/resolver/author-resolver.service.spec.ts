import { TestBed, inject } from '@angular/core/testing';

import { AuthorResolverService } from './author-resolver.service';

describe('AuthorResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorResolverService]
    });
  });

  it('should be created', inject([AuthorResolverService], (service: AuthorResolverService) => {
    expect(service).toBeTruthy();
  }));
});
