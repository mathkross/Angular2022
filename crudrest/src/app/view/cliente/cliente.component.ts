import { ThisReceiver } from '@angular/compiler';
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
  editando = false;
  colunas = ['nome', 'cpf', 'acoes'];


  // clientes: Cliente []

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
      this.cliente = undefined;
    });
  }

  novo() {
    this.cliente = new Cliente();
    this.editando = false;
  }

  salvar() {
    if (this.cliente) {
      if (!this.editando){
        this.clienteService.inserir(this.cliente).subscribe(Cliente => {
          this.listar();
          this.cliente = undefined;
        });
      }
      else {
        this.clienteService.atualizar(this.cliente).subscribe(cliente => {
          this.listar();
          this.cliente = undefined;
        });
    }
    }
  }
  excluir(id: number) {
    this.clienteService.remover(id).subscribe(() => {

      this.listar();
    }); //FUNÇAO SETA SEM PARAMETROS (() =>  {})
  }

  editar(cliente: Cliente) {
    this.cliente = cliente;
    this.editando = true;

  }
}
