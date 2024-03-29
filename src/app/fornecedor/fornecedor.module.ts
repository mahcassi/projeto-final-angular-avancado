import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';
import { NgBrazil } from 'ng-brazil';
import { NgxSpinnerModule } from "ngx-spinner";

import { FornecedorComponent } from './fornecedor.component';
import { FornecedorRoutingModule } from './fornecedor.route';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { FornecedorService } from './services/fornecedor.service';
import { FornecedorResolve } from './services/fornecedor.resolve';
import { FornecedorGuard } from './services/fornecedor.guard';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';




@NgModule({
  declarations: [
    FornecedorComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent,
    NovoComponent,
    ListaComponent,
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    NgxSpinnerModule
  ],
  providers: [
    FornecedorService,
    FornecedorResolve,
    FornecedorGuard
  ]
})
export class FornecedorModule { }
