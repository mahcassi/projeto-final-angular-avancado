import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FornecedorComponent } from './fornecedor.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';

const fornecedorRouterConfig: Routes = [
    {
      path: '', component: FornecedorComponent,
      children: [
        { path: 'listar-todos', component: ListaComponent },
        { path: 'adicionar-novo', component: NovoComponent },
        { path: 'editar/:id', component: EditarComponent },
        { path: 'detalhes/:id', component: DetalhesComponent },
        { path: 'excluir/:id', component: ExcluirComponent }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fornecedorRouterConfig)
    ],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }
