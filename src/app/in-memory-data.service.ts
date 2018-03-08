import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/model/mock-pokemons';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let pokemons = POKEMONS;
		return { pokemons };
	}
}