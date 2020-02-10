import { TestBed } from '@angular/core/testing';

import { ChaveGruposService } from './chave-grupos.service';

describe('ChaveGruposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaveGruposService = TestBed.get(ChaveGruposService);
    expect(service).toBeTruthy();
  });
});
