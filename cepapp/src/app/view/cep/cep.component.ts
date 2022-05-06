import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Endereco } from 'src/app/Model/endereco';
import { EnderecoService } from 'src/app/services/endereco.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep = '';
  endereco?: Endereco; //? opcional


  constructor(private endService: EnderecoService) { }

  ngOnInit(): void {
  }

  consultarCep()
  {
    this.endService.obterEndereco(this.cep).subscribe(endereco => {
      this.endereco = endereco;
    });
  }

}
