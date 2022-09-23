import { NlzSidebarComponent } from './nlz-componentes-fixos/nlz-sidebar/nlz-sidebar.component';
import { TelaLoginComponent } from './tela-login/tela-login/tela-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'sidebar', component: NlzSidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
