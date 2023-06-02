import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  // },
  // {
  //   path: 'inicio',
  //   component: InicioComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'aviso_privacidad',
  //   component: AvisoprivComponent
  // },
  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },
  // {
  //   path: '',
  //   component: InicioComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '404'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
