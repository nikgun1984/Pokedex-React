import Pokedex from "./Pokedex";
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

const handOne = pokemons;
const handTwo = [];
for (let i = 0; i < 4; i++) {
	const obj = handOne.splice(Math.floor(Math.random() * handOne.length), 1)[0];
	handTwo.push(obj);
}

const totalHandOne = handOne.reduce((total, val) => {
	return total + val.base_experience;
}, 0);
const totalHandTwo = handTwo.reduce((total, val) => {
	return total + val.base_experience;
}, 0);

const Pokegame = () => {
	return (
		<>
			<Pokedex
				hand={handOne}
				totalExp={totalHandOne}
				isWinner={totalHandOne > totalHandTwo ? "This hand Wins!!!" : ""}
				handNum="Hand One"
			/>
			<Pokedex
				hand={handTwo}
				totalExp={totalHandTwo}
				isWinner={totalHandTwo > totalHandOne ? "This hand Wins!!!" : ""}
				handNum="Hand Two"
			/>
		</>
	);
};

export default Pokegame;
