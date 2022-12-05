import { TestBed } from '@angular/core/testing';

import { CtxCadastroService } from './ctx-cadastro.service';

describe('CtxCadastroService', () => {
  let service: CtxCadastroService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtxCadastroService]
    });

    service = TestBed.inject(CtxCadastroService);
  });

  it("should sum 2 numbers",()=>{
    expect(service.sum(1,2)).toBe(3)
  })
  it("should minus 2 numbers",()=>{
    expect(service.minus(2,2)).toBe(0)
  })
})
