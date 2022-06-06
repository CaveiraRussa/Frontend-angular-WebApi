import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItemAction } from 'src/app/interfaces/iitem-action';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuarioHeaders: { title: string; alias: string }[] = [];
  data: Usuario[];

  listActions: IItemAction[] = [
    {
      name: 'Edit Task',
      icon: 'edit',
      type: 'modal',
      handler: (item) => this.editar(item),
    },
    {
      name: 'Delete Task',
      icon: 'delete',
      type: 'modal',
      handler: (item) => this.deletar(item),
    },
  ];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.handleList();
  }

  handleList() {
    const titles = [
      {
        title: 'Actions',
        alias: 'actions',
      },
      {
        title: 'ID',
        alias: 'id',
      },
      {
        title: 'Nome',
        alias: 'nome',
      },
      {
        title: 'Sobrenome',
        alias: 'sobrenome',
      },
      {
        title: 'Email',
        alias: 'email',
      },
      {
        title: 'Data de nascimento',
        alias: 'dataNascimento',
      },
      {
        title: 'Escolaridade',
        alias: 'escolaridadeText',
      },
    ];
    this.usuarioHeaders = titles;
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getAllUsuario().subscribe((data: Usuario[]) => {
      if (data) {
        data.forEach(
          (item: Usuario) =>
            (item.escolaridadeText = this.setEscolaridade(item.escolaridade))
        );
      }
      this.data = data;
    });
  }

  setEscolaridade(number: number): string {
    var text = '';
    if (number === 1) {
      text = 'Infantil';
    }
    if (number === 2) {
      text = 'Fundamental';
    }
    if (number === 3) {
      text = 'Médio';
    }
    if (number === 4) {
      text = 'Superior';
    }
    return text;
  }

  novo() {
    this.router.navigate([`/home/novo`]);
  }

  editar(item: Usuario) {
    this.router.navigate([`/home/editar/${item.id}`]);
  }

  deletar(item: Usuario) {
    this.usuarioService.deleteUsuario(item).subscribe((data) => {
      if (data) {
        this.getUsuarios();
      }
    });
  }
}
