import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private route: ActivatedRoute) {
    this.fornecedor = this.route.snapshot.data['fornecedor'];
  }


  ngOnInit(): void {
    console.log(this.EnderecoCompleto())
  }

  public EnderecoCompleto(): string {
    return this.fornecedor.endereco.logradouro + ", " + this.fornecedor.endereco.numero + " - " + this.fornecedor.endereco.bairro +
      ", " + this.fornecedor.endereco.cidade + " - " + this.fornecedor.endereco.estado;
  }

}
