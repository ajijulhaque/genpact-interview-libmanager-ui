import { TestBed } from '@angular/core/testing';

import { LibApiService } from './lib-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibApiService', () => {
  let service: LibApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(LibApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
