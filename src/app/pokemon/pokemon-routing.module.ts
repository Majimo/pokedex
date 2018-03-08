import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './components/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon.component';
import { EditPokemonComponent } from './components/forms/edit-pokemon.component';

// routes definition
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/edit/:id', component: EditPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }