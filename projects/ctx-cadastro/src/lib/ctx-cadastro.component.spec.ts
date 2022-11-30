import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtxCadastroComponent } from './ctx-cadastro.component';

describe('CtxCadastroComponent', () => {
  let component: CtxCadastroComponent;
  let fixture: ComponentFixture<CtxCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtxCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtxCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
