import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './components/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon.component';
import { ShadowCardDirective } from './directive/shadow-card.directive';
import { EditPokemonComponent } from './components/forms/edit-pokemon.component';
import { PokemonFormComponent } from './components/forms/pokemon-form.component';
import { PokemonSearchComponent } from './components/pokemon-search.component';

import { pokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonService } from './services/pokemon.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        ShadowCardDirective,
        pokemonTypeColorPipe,
        PokemonSearchComponent,
    ],
    providers: [PokemonService]
})
export class PokemonsModule { }