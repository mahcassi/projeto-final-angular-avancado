import { FooterComponet } from './footer/footer.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponet } from "./home/home.component";
import { MenuComponet } from "./menu/menu.component";
import { NotFoundComponet } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from './menu-login/menu-login.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';

@NgModule({
  declarations: [
    HomeComponet,
    MenuComponet,
    MenuLoginComponent,
    FooterComponet,
    NotFoundComponet,
    AcessoNegadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HomeComponet,
    MenuComponet,
    MenuLoginComponent,
    FooterComponet,
    NotFoundComponet,
    AcessoNegadoComponent
  ]
})
export class NavegacaoModule {

}
