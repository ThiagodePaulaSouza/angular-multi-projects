import {CtxCadastroService2} from "./ctx-cadastro.service2";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtxCadastroService {
  constructor(public service: CtxCadastroService2) { }

  public sum(a:number,b:number){
    return a+b
  }

  public minus(a:number,b:number){
    return this.service.minus(a,b);
  }
}
