import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './components/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon.component';
import { ShadowCardDirective } from './directive/shadow-card.directive';
import { pokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonService } from './pokemon.service';

@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        ShadowCardDirective,
        pokemonTypeColorPipe,
    ],
    providers: [PokemonService]
})
export class PokemonsModule { }