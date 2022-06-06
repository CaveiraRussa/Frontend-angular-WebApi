import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  path: string;
  id: string;
  usuarioForm: FormGroup;
  escolaridades: { value: number; text: string }[];
  maxDate: Date = new Date(Date.now());
  usuario: Usuario;

  constructor(
    private activateRouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.path = this.activateRouter.snapshot.data['title'];
    if (this.path !== 'Novo') {
      const id = this.activateRouter.snapshot.paramMap.get('id');
      if (id) {
        this.id = id;
        this.get(id);
      }
    }
    const options = [
      {
        value: 1,
        text: 'Infantil',
      },
      {
        value: 2,
        text: 'Fundamental',
      },
      {
        value: 3,
        text: 'Médio',
      },
      {
        value: 4,
        text: 'Superior',
      },
    ];

    this.escolaridades = options;
    this.generateForm();
  }

  generateForm() {
    this.usuarioForm = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      dataDeNascimento: ['', [Validators.required]],
      escolaridade: ['', [Validators.required]],
    });
  }

  buildForm(usuario: Usuario) {
    this.usuarioForm.get('nome')?.setValue(usuario.nome);
    this.usuarioForm.get('sobrenome')?.setValue(usuario.sobrenome);
    this.usuarioForm.get('email')?.setValue(usuario.email);
    this.usuarioForm.get('dataDeNascimento')?.setValue(usuario.dataNascimento);
    this.usuarioForm.get('escolaridade')?.setValue(usuario.escolaridade);
  }

  voltar() {
    this.router.navigate([`/home`]);
  }

  get(id: string) {
    this.usuarioService.getUsuarioById(id).subscribe((data) => {
      if (data) {
        this.usuario = data;
        this.buildForm(data);
      }
    });
  }

  salvar() {
    const usuario: Usuario = this.usuarioForm.value;
    this.usuarioService.postUsuario(usuario).subscribe((data) => {
      if (data) {
        alert('Sucesso');
        this.voltar();
      }
    });
  }

  editar() {
    var usuario: Usuario = this.usuarioForm.value;
    usuario.id = +this.id;
    this.usuarioService.putUsuario(usuario, this.id).subscribe((data) => {
      if (data) {
        alert('Sucesso');
        this.voltar();
      }
    });
  }
}
