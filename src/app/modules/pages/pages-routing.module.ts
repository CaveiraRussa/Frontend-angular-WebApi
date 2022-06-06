import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from 'src/app/components/home-layout/home-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { UsuarioFormComponent } from 'src/app/pages/usuario-form/usuario-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    data: {
      title: '',
      url: '/home',
      isClickable: true,
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {
          title: '',
          url: '/home',
          hide: true,
        },
      },
      {
        path: 'novo',
        component: UsuarioFormComponent,
        data: {
          title: 'Novo',
          breadcrumb: 'Usuario',
          url: '/home/novo',
        },
      },
      {
        path: 'editar/:id',
        component: UsuarioFormComponent,
        pathMatch: 'full',
        data: {
          title: 'Editar',
          breadcrumb: 'Usuario',
          url: '/home/editar',
        },
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
