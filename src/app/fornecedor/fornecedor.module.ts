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
  ],
  providers: [
    FornecedorService
  ]
})
export class FornecedorModule { }
