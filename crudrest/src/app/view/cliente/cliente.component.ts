import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes = new Array<Cliente>();
  cliente?: Cliente;
  // clientes: Cliente []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  this.listar();
  }

  listar(){
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
      this.cliente = undefined;
    });
  }

  novo () {
    this.cliente = new Cliente();
  }

  salvar (){
    if (this.cliente) {
    this.clienteService.inserir(this.cliente).subscribe(Cliente => {
      this.listar();
    });
    }
  }
}
