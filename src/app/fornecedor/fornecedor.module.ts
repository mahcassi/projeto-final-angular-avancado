import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorRoutingModule } from './fornecedor.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { FornecedorService } from './services/fornecedor.service';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { FornecedorResolve } from './services/fornecedor.resolve';



@NgModule({
  declarations: [
    FornecedorComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent,
    NovoComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBrazil,
    TextMaskModule,
  ],
  providers: [
    FornecedorService,
    FornecedorResolve
  ]
})
export class FornecedorModule { }
