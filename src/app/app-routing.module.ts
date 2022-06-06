import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const pagesModule = () => import('./modules/pages/pages.module').then(x => x.PagesModule);

const routes: Routes = [
  {path: 'home', loadChildren: pagesModule},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: !isIframe ? 'enabled' : 'disabled', useHash: false, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
