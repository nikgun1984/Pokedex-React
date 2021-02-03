const imgBaseURL =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const PokeCard = ({ id, name, type, base_experience }) => {
	return (
		<div className="PokeCard">
			<h3>{name}</h3>
			<img
				src={`${imgBaseURL}/${id}.png`}
				alt="Alt Img"
				className="PokeCard-image"
			/>
			<p>Type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	);
};

export default PokeCard;
