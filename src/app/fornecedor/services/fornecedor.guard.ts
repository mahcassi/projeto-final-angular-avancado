import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";

import { NovoComponent } from '../novo/novo.component';
import { BaseGuard } from 'src/app/services/base.guard';

@Injectable()
export class FornecedorGuard extends BaseGuard implements CanActivate, CanDeactivate<NovoComponent> {
  constructor(protected router: Router) {
    super(router);
  }

  canDeactivate(component: NovoComponent) {
    if(component.mudancasNaoSalvas) {
      return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
    }
    return true;
  }

  canActivate(routeAc: ActivatedRouteSnapshot) {
    return super.validarClaims(routeAc);
  }
}
