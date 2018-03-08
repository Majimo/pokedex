import { Injectable } from '@angular/core';
import { Pokemon } from './model/pokemon';
import { POKEMONS } from './model/mock-pokemons';

@Injectable()
export class PokemonService {

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ]
    }
    // Get tous les pokemons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Get Pokemon avec ID
    getPokemon(id: number) {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }
}