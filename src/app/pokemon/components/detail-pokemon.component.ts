import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../model/mock-pokemons';

import { PokemonService } from '../services/pokemon.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.pokemonService.getPokemon(id).then(pokemon => this.pokemon = pokemon);
        });
    }

    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    goBack(): void {
        window.history.back();
    }

    editPokemon(pokemon: Pokemon): void {
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

}