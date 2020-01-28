import { TestBed } from '@angular/core/testing';

import { PlacarService } from './classificacao.service';

describe('PlacarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacarService = TestBed.get(PlacarService);
    expect(service).toBeTruthy();
  });
});
