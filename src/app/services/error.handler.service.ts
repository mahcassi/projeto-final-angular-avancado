import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LocalStorageUtils } from "../utils/localstorage";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  localStorageUtil = new LocalStorageUtils();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // manipulando o processamento da requisição no momento que ela tiver erros
    return next.handle(req).pipe(catchError(error => {

      if (error instanceof HttpErrorResponse) {

        if (error.status === 401) {
          this.localStorageUtil.limparDadosLocaisUsuario();
          //Se minha rota sabia de onde eu vim, pq n posso voltar pra la?
          // qnd temos um parametro n declarado precisamos usar o "?"
          // vou pesquisar algo através do queryParams
          // estou passando minha rota atual como parâmetro
          this.router.navigate(['/conta/login'], { queryParams: { returnUrl: this.router.url }});
        }

        if (error.status === 403) {
          this.router.navigate(['/acesso-negado'])
        }

      }

      return throwError(error);

    }));

  }

}
