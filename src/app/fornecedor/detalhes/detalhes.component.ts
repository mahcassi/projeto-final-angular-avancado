import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor();

  constructor(
  private route: ActivatedRoute,
  private fornecedorService: FornecedorService)
  {
    this.fornecedor = this.route.snapshot.data['fornecedor'];
  }


  ngOnInit(): void {
  }

}
