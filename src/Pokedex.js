import PokeCard from "./PokeCard";
import "./PokeCard.css";
import "./Pokedex.css";

const pokemons = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const Pokedex = (props) => {
	return (
		<>
			<h1 class="Pokedex">Pokedex</h1>
			<div id="grid">
				{pokemons.map((pokemon) => (
					<div>
						<PokeCard
							id={pokemon.id}
							name={pokemon.name}
							type={pokemon.type}
							base_experience={pokemon.base_experience}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Pokedex;
