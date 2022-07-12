import { FooterComponet } from './footer/footer.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponet } from "./home/home.component";
import { MenuComponet } from "./menu/menu.component";
import { NotFoundComponet } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponet,
    MenuComponet,
    FooterComponet,
    NotFoundComponet
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HomeComponet,
    MenuComponet,
    FooterComponet,
    NotFoundComponet
  ]
})
export class NavegacaoModule {

}
