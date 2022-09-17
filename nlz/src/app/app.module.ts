import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login/tela-login.component';
import { NlzSidebarComponent } from './nlz-componentes-fixos/nlz-sidebar/nlz-sidebar.component';
import { NlzRodapeComponent } from './nlz-componentes-fixos/nlz-rodape/nlz-rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    NlzSidebarComponent,
    NlzRodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
