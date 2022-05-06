import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { PlataformasComponent } from './views/plataformas/plataformas.component';
import { SobreComponent } from './views/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    JogosComponent,
    PlataformasComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
