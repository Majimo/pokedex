import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../model/pokemon';

@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

    @Input() pokemon: Pokemon;
    types: Array<string>;

    constructor(private pokemonService: PokemonService, private router: Router) {}

    ngOnInit(): void {
        this.types = this.pokemonService.getPokemonTypes();
    }

    // Déterminer si le type passé en param appartient ou non au pokemon édité
    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);
        if (~index) return true; // Si index est supérieur à -1
        console.log(index);
        return false;
    }

    // Ajouter ou retirer un type au pokemon édité
    selectType($event: any, type: string) {
        let checked = $event.target.checked;
        if (checked) {
            this.pokemon.types.push(type);
        } else {
            let index = this.pokemon.types.indexOf(type);
            if (~index) {
                this.pokemon.types.slice(index, 1);
            }
        }
    }

    // 3 types par pokemon maxi
    isTypeValid(type: string): boolean {
        if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
            return false;
        }
        return true;
    }

    // "Soumettre" le formulaire
    onSubmit(): void {
        console.log('Formulaire envoyé');
        this.pokemonService.update(this.pokemon)
            .then(() => {
                let link = ['/pokemon', this.pokemon.id];
                this.router.navigate(link);
            });
    }
}