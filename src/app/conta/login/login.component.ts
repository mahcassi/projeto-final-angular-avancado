import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { CustomValidators } from "ngx-custom-validators";
import { ToastrService } from "ngx-toastr";

import { Usuario } from "../models/usuario";
import { ContaService } from "../services/conta.service";

import { FormBaseComponent } from "src/app/base-components/form-base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends FormBaseComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  public loginForm: FormGroup;
  public usuario: Usuario;
  public errors: any[] = [];

  public returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute
  ) {
    super();

    this.validationMessages = {
      email: {
        required: "Informe o e-mail",
        email: "E-mail inválido",
      },
      password: {
        required: "Informe a senha",
        rangeLength: "A senha deve possuir entre 6 e 15 cacrteres",
      }
    };

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [
        Validators.required,
        CustomValidators.rangeLength([6, 15]),
      ]]
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.loginForm);
  }

  login() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.loginForm.value);

      this.contaService.login(this.usuario).subscribe(
        (res) => {
          this.processarSucesso(res);
        },
        (err) => {
          this.processarFalha(err);
        }
      );
    }
  }

  processarSucesso(response: any) {
    this.loginForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toast.success("Login realizado com sucesso!", "Bem vindo!!!");
    if (toast) {
      toast.onHidden.subscribe(() => {
        {
          this.returnUrl ? this.router.navigate([this.returnUrl]) : this.router.navigate(["/home"]);
        }
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toast.error('Ocorreu um erro!', 'Opa :(');
  }
}
