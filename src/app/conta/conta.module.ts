import { ContaService } from './services/conta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

import { ContaRoutingModule } from './conta.route';
import { ContaAppComponente } from './conta.app.component';

import { CustomFormsModule } from 'ngx-custom-validators';
import { ContaGuard } from './services/conta.guard';

@NgModule({
  declarations: [ContaAppComponente, CadastroComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [ContaService, ContaGuard],
})
export class ContaModule {}
