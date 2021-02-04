import PokeCard from "./PokeCard";

const Pokedex = ({ hand, totalExp, handNum, isWinner }) => {
	return (
		<div className="Pokedex">
			<h3>{handNum}</h3>
			<h3> Total Experience {totalExp} </h3>
			{isWinner}
			<div id="grid">
				{hand.map((pokemon) => (
					<div key={pokemon.id}>
						<PokeCard
							id={pokemon.id}
							name={pokemon.name}
							type={pokemon.type}
							base_experience={pokemon.base_experience}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pokedex;
