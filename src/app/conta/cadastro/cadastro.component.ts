import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

import { fromEvent, merge, Observable } from "rxjs";

import { CustomValidators } from "ngx-custom-validators";
import { ToastrService } from "ngx-toastr";

import { Usuario } from "../models/usuario";
import { ContaService } from "../services/conta.service";

import { FormBaseComponent } from "src/app/base-components/form-base.component";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent extends FormBaseComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  public cadastroForm: FormGroup;
  public usuario: Usuario;
  public errors: any[] = [];

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router,
    private toast: ToastrService
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
      },
      confirmPassword: {
        required: "Informe a senha novamente",
        rangeLength: "A senha deve possuir entre 6 e 15 caracteres",
        equalTo: "As senhas não conferem",
      },
    };

    super.configurarMensagensValidacaoBase(this.validationMessages)
  }

  ngOnInit(): void {
    let senha = new FormControl("", [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
    ]);

    let senhaConfirm = new FormControl("", [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(senha),
    ]);

    this.cadastroForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm,
    });
  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.cadastroForm);
  }

  adicionarConta() {
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);

      this.contaService.registrarUsuario(this.usuario).subscribe(
        (res) => {
          this.processarSucesso(res);
        },
        (err) => {
          this.processarFalha(err);
        }
      );

      this.mudancasNaoSalvas = false;
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toast.success("Registro realizado com sucesso!", "Bem vindo!!!");
    if(toast) {
      toast.onHidden.subscribe(() => {{
        this.router.navigate(["/home"]);
      }});
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toast.error('Ocorreu um erro!', 'Opa :(');
  }
}
