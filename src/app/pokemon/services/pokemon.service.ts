import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../model/mock-pokemons';

@Injectable()
export class PokemonService {

    constructor(private http: Http) {}

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ]
    }
    // Get tous les pokemons
    getPokemons(): Promise<Pokemon[]> {
        return this.http.get('app/pokemons')
                    .toPromise()
                    .then(response => response.json() as Pokemon[])
                    .catch(this.handleError);
    }

    // Get Pokemon avec ID
    getPokemon(id: number): Promise<Pokemon> {
        const url = 'app/pokemons/' + id;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Pokemon)
            .catch(this.handleError);
    }

    // Update Pokemon avec ID
    update(pokemon: Pokemon): Promise<Pokemon> {
        const url = `app/pokemons/${pokemon.id}`;   // ATTENTION A LA SYNTAXE :D
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http
            .put(url, JSON.stringify(pokemon))
            .toPromise()
            .then(() => pokemon)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Erreur : ', error);
        return Promise.reject(error.message || error);
    }
}