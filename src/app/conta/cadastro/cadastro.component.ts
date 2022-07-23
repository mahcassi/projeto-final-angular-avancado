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
import { CustomValidators } from "ngx-custom-validators";
import { fromEvent, merge, Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { ContaService } from "../services/conta.service";
import {
  DisplayMessage,
  GenericValidator,
  ValidationMessages,
} from "./../../utils/generic-form-validation";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  public cadastroForm: FormGroup;
  public usuario: Usuario;
  public errors: any[] = [];

  public validationMessages: ValidationMessages;
  public genericValidator: GenericValidator;
  public displayMessage: DisplayMessage = {};

  public mudancasNaoSalvas: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private router: Router
  ) {
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

    this.genericValidator = new GenericValidator(this.validationMessages);
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
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, "blur")
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(
        this.cadastroForm
      );
      this.mudancasNaoSalvas = true;
    });
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
    }
  }

  processarSucesso(response: any) {
    this.cadastroForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    this.router.navigate(['/home']);
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
  }
}
