import { TestBed } from '@angular/core/testing';

import { IntegerParameterGuard } from './integer-parameter.guard';

describe('IntegerParameterGuard', () => {
  let guard: IntegerParameterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntegerParameterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
