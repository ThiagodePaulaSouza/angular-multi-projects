import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtxCadastroService2 {

  constructor() { }

  public minus(a:number,b:number){
    return a-b
  }
}
