import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContaAppComponente } from "./conta.app.component";
import { LoginComponent } from "./login/login.component";

const contaRouterConfig: Routes = [
  {
    path: '', component: ContaAppComponente,
    children: [
      {
        path: 'cadastro', component: CadastroComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(contaRouterConfig)
  ],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
