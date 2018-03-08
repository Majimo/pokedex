import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

import { PokemonsModule } from './pokemon/pokemon.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule, PokemonsModule, AppRoutingModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
