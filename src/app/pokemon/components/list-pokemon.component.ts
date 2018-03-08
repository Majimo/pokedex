import { PokemonService } from '../services/pokemon.service';

import { POKEMONS } from '../model/mock-pokemons';
import { Pokemon } from '../model/pokemon';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['../../app.component.css'],
})
export class ListPokemonComponent {
    title = 'Liste des pokemons';
    pokemons: Pokemon[] = null;

    constructor(private router: Router, private pokemonService: PokemonService) {

    }

    ngOnInit() {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemonService.getPokemons().then(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez sélectionné : ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}
