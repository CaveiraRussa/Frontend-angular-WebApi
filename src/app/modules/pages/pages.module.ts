import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { UsuarioFormComponent } from '../../pages/usuario-form/usuario-form.component';
import { UsuarioService } from 'src/app/services/usuario.service';

@NgModule({
  declarations: [
    HomeComponent,
    UsuarioFormComponent
  ],
  imports: [SharedModule, PagesRoutingModule],
  providers: [UsuarioService],
})
export class PagesModule {}
