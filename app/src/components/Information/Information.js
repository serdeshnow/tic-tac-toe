import stylesI from "./Information.module.css";
import PropTypes from "prop-types";

const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<section className={`${stylesI.info} ${stylesI[currentPlayer]}`}>
			{isDraw
				? "Ничья"
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</section>
	);
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};

export default Information;
