import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CtxCadastrosModule} from '../../../ctx-cadastro/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CtxCadastrosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
